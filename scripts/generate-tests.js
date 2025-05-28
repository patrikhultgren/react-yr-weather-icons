const fs = require("fs");
const path = require("path");

const directories = [
  path.join(__dirname, "../src/components/dark"),
  path.join(__dirname, "../src/components/light"),
];

// Helper to create test content for a component name
function createTestContent(componentName, symbolCode) {
  return `
import { render, screen } from "@testing-library/react";
import ${componentName} from "../${symbolCode}";

describe("${componentName}", () => {
  it("renders without crashing", () => {
    render(<${componentName} />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<${componentName} title="${componentName} title" titleId="${componentName.toLowerCase()}-title" />);
    const title = screen.getByTitle("${componentName} title");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "${componentName.toLowerCase()}-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<${componentName} titleId="${symbolCode}-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("accepts and applies width and height props", () => {
    render(<${componentName} width="100px" height="150px" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("width", "100px");
    expect(svg).toHaveAttribute("height", "150px");
  });

  it("accepts and applies className prop", () => {
    render(<${componentName} className="my-custom-class" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveClass("my-custom-class");
  });

  it("accepts and forwards other SVG props", () => {
    render(
      <${componentName}
        data-testid="svg-element"
        aria-label="Heavy rain icon"
        style={{ border: "1px solid red" }}
        tabIndex={0}
      />
    );
    const svg = screen.getByTestId("svg-element");
    expect(svg).toHaveAttribute("aria-label", "Heavy rain icon");
    expect(svg).toHaveStyle("border: 1px solid red");
    expect(svg).toHaveAttribute("tabindex", "0");
  });
});
`;
}

// Helper to extract component name from file content
function extractComponentName(fileContent) {
  // Try to match `const ComponentName =` or `function ComponentName` or `export default function ComponentName`
  const constMatch = fileContent.match(/const\s+([A-Z][A-Za-z0-9_]*)\s*=/);
  if (constMatch) return constMatch[1];

  const functionMatch = fileContent.match(
    /function\s+([A-Z][A-Za-z0-9_]*)\s*\(/
  );
  if (functionMatch) return functionMatch[1];

  const exportDefaultFuncMatch = fileContent.match(
    /export\s+default\s+function\s+([A-Z][A-Za-z0-9_]*)\s*\(/
  );
  if (exportDefaultFuncMatch) return exportDefaultFuncMatch[1];

  // Fallback: try to match export default ComponentName;
  const exportDefaultMatch = fileContent.match(
    /export\s+default\s+([A-Z][A-Za-z0-9_]*);?/
  );
  if (exportDefaultMatch) return exportDefaultMatch[1];

  return null;
}

directories.forEach((dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading ${dir}:`, err);
      return;
    }

    // Ensure __tests__ folder exists inside the dir
    const testsDir = path.join(dir, "__tests__");
    if (!fs.existsSync(testsDir)) {
      fs.mkdirSync(testsDir);
    }

    files.forEach((file) => {
      const ext = path.extname(file);

      if (ext === ".tsx") {
        const symbolCode = file.replace(".tsx", "");
        const filePath = path.join(dir, file);

        // Read file content synchronously (or async with callback/promises if preferred)
        const content = fs.readFileSync(filePath, "utf-8");

        const componentName = extractComponentName(content) || "TestComponent";

        const newName = `${symbolCode}.test.tsx`; // Use symbolCode for test file name

        const testFilePath = path.join(testsDir, newName);
        const testContent = createTestContent(componentName, symbolCode);

        fs.writeFile(testFilePath, testContent, (err) => {
          if (err) {
            console.error(`Failed to write test for ${componentName}:`, err);
          } else {
            console.log(`Test written for ${componentName} at ${testFilePath}`);
          }
        });
      }
    });
  });
});
