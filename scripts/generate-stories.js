const fs = require("fs");
const path = require("path");

// Directories
const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const STORIES_DIR = path.join(__dirname, "../src/stories");
const THEMES = ["dark", "light"];

// Ensure stories directory exists
if (!fs.existsSync(STORIES_DIR)) {
  fs.mkdirSync(STORIES_DIR);
}

// Create MDX story content using YrWeatherIcon instead of individual icons
function createMdxStory(theme, symbolCodes) {
  const importStmt = `import YrWeatherIcon from '../components/YrWeatherIcon';`;

  const galleryItems = symbolCodes
    .map(
      (code) => `
  <div class="icon-item">
    <YrWeatherIcon symbolCode="${code}" mode="${theme}" />
    <div class="icon-label">${code}</div>
  </div>`
    )
    .join("\n");

  return `import { Meta } from '@storybook/blocks';
${importStmt}

<Meta title="Iconography/${theme.charAt(0).toUpperCase() + theme.slice(1)}" />

<style>
{ \`
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .icon-label {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #666;
  }
\` }
</style>

<div class="icon-grid">
${galleryItems}
</div>
`;
}

// Main generator
THEMES.forEach((theme) => {
  const themeDir = path.join(COMPONENTS_DIR, theme);
  if (!fs.existsSync(themeDir)) return;

  const files = fs.readdirSync(themeDir).filter((f) => f.endsWith(".tsx"));
  const symbolCodes = files.map((file) => file.replace(/\.tsx$/, ""));

  const storyContent = createMdxStory(theme, symbolCodes);
  const storyPath = path.join(STORIES_DIR, `${theme}.mdx`);
  fs.writeFileSync(storyPath, storyContent, "utf8");
  console.log(`✅ Generated story: ${storyPath}`);
});
