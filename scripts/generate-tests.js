const fs = require("fs");
const path = require("path");

const directories = [
  path.join(__dirname, "../src/components/dark"),
  path.join(__dirname, "../src/components/light"),
];

// Helper to create test content for a component name
function createTestContent(componentName, symbolCode) {
  return `
import React from "react";
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
        const newName = `${file.replace("tsx", "test")}.tsx`;
        const symbolCode = file.replace(".tsx", "");

        const componentName = "TestComponent";
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
