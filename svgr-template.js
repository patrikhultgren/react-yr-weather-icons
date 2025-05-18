const { types: t } = require("@babel/core");

const icons = {
  ClearSkyDay: { id: "01d" },
  ClearSkyNight: { id: "01n" },
  ClearSkyPolarTwilight: {
    id: "01m",
  },
  Cloudy: { id: "04" },
  FairDay: { id: "02d" },
  FairNight: { id: "02n" },
  FairPolarTwilight: {
    id: "02m",
  },
  Fog: { id: "15" },
  HeavyRain: { id: "10" },
  HeavyRainAndThunder: {
    id: "11",
  },
  HeavyRainShowersDay: {
    id: "41d",
  },
  HeavyRainShowersNight: {
    id: "41n",
  },
  HeavyRainShowersPolarTwilight: {
    id: "41m",
  },
  HeavyRainShowersAndThunderDay: {
    id: "25d",
  },
  HeavyRainShowersAndThunderNight: {
    id: "25n",
  },
  HeavyRainShowersAndThunderPolarTwilight: {
    id: "25m",
  },
  HeavySleet: { id: "48" },
  HeavySleetAndThunder: {
    id: "32",
  },
  HeavySleetShowersDay: {
    id: "43d",
  },
  HeavySleetShowersNight: {
    id: "43n",
  },
  HeavySleetShowersPolarTwilight: {
    id: "43m",
  },
  HeavySleetShowersAndThunderDay: {
    id: "27d",
  },
  HeavySleetShowersAndThunderNight: {
    id: "27n",
  },
  HeavySleetShowersAndThunderPolarTwilight: {
    id: "27m",
  },
  HeavySnow: { id: "50" },
  HeavySnowandThunder: {
    id: "34",
  },
  HeavySnowShowersDay: {
    id: "45d",
  },
  HeavySnowShowersNight: {
    id: "45n",
  },
  HeavySnowShowersPolarTwilight: {
    id: "45m",
  },
  HeavySnowShowersAndThunderDay: {
    id: "29d",
  },
  HeavySnowShowersAndThunderNight: {
    id: "29n",
  },
  HeavySnowShowersAndThunderPolarTwilight: {
    id: "29m",
  },
  LightRain: { id: "46" },
  LightRainAndThunder: {
    id: "30",
  },
  LightRainShowersDay: {
    id: "40d",
  },
  LightRainShowersNight: {
    id: "40n",
  },
  LightRainShowersPolarTwilight: {
    id: "40m",
  },
  LightRainShowersAndThunderDay: {
    id: "24d",
  },
  LightRainShowersAndThunderNight: {
    id: "24n",
  },
  LightRainShowersAndThunderPolarTwilight: {
    id: "24m",
  },
  LightSleet: { id: "47" },
  LightSleetAndThunder: {
    id: "31",
  },
  LightSleetShowersDay: {
    id: "42d",
  },
  LightSleetShowersNight: {
    id: "42n",
  },
  LightSleetShowersPolarTwilight: {
    id: "42m",
  },
  LightSnow: { id: "49" },
  LightSnowandThunder: {
    id: "33",
  },
  LightSnowShowersDay: {
    id: "44d",
  },
  LightSnowShowersNight: {
    id: "44n",
  },
  LightSnowShowersPolarTwilight: {
    id: "44m",
  },
  LightSleetShowersAndThunderDay: {
    id: "26d",
  },
  LightSleetShowersAndThunderNight: {
    id: "26n",
  },
  LightSleetShowersAndThunderPolarTwilight: {
    id: "26m",
  },
  LightSnowShowersAndThunderDay: {
    id: "28d",
  },
  LightSnowShowersAndThunderNight: {
    id: "28n",
  },
  LightSnowShowersAndThunderPolarTwilight: {
    id: "28m",
  },
  PartlyCloudyDay: {
    id: "03d",
  },
  PartlyCloudyNight: {
    id: "03n",
  },
  PartlyCloudyPolarTwilight: {
    id: "03m",
  },
  Rain: { id: "09" },
  RainandThunder: { id: "22" },
  RainShowersDay: { id: "05d" },
  RainShowersNight: { id: "05n" },
  RainShowersPolarTwilight: {
    id: "05m",
  },
  RainShowersAndThunderDay: {
    id: "06d",
  },
  RainShowersAndThunderNight: {
    id: "06n",
  },
  RainShowersAndThunderPolarTwilight: {
    id: "06m",
  },
  Sleet: { id: "12" },
  SleetAndThunder: {
    id: "23",
  },
  SleetShowersDay: {
    id: "07d",
  },
  SleetShowersNight: {
    id: "07n",
  },
  SleetShowersPolarTwilight: {
    id: "07m",
  },
  SleetShowersAndThunderDay: {
    id: "20d",
  },
  SleetShowersAndThunderNight: {
    id: "20n",
  },
  SleetShowersAndThunderPolarTwilight: {
    id: "20m",
  },
  Snow: { id: "13" },
  SnowAndThunder: { id: "14" },
  SnowShowersDay: { id: "08d" },
  SnowShowersNight: { id: "08n" },
  SnowShowersPolarTwilight: {
    id: "08m",
  },
  SnowShowersAndThunderDay: {
    id: "21d",
  },
  SnowShowersAndThunderNight: {
    id: "21n",
  },
  SnowShowersAndThunderPolarTwilight: {
    id: "21m",
  },
};

function getComponentName(componentName) {
  var id = componentName.replace("Svg", "").toLowerCase();

  for (const name of Object.keys(icons)) {
    if (icons[name].id === id) {
      return name;
    }
  }

  return componentName;
}

/**
 * Recursively traverse the AST, transforming id="..." and url(#...) into dynamic references
 */
function traverseSvgAst(node, idMap) {
  if (!node || typeof node !== "object") return;

  if (node.type === "JSXElement") {
    const { openingElement, children } = node;

    if (openingElement && openingElement.attributes) {
      for (const attr of openingElement.attributes) {
        if (attr.type === "JSXAttribute" && attr.name && attr.value) {
          // If this is id="someId"
          if (attr.name.name === "id" && attr.value.type === "StringLiteral") {
            const oldId = attr.value.value;
            const varName = getVarNameForId(oldId, idMap);
            // Replace with {varName} via JSXExpressionContainer
            attr.value = t.jsxExpressionContainer(t.identifier(varName));
          }

          // If the string value contains url(#someId)
          if (attr.value.type === "StringLiteral") {
            const oldStr = attr.value.value;
            if (oldStr.includes("url(#")) {
              // Replace all occurrences of url(#ID)
              const replacedNode = replaceUrlIdWithRefs(oldStr, idMap);
              if (replacedNode) {
                attr.value = replacedNode;
              }
            }

            if (attr.name.name === "xlinkHref") {
              const oldId = attr.value.value.replace("#", "");
              const varName = getVarNameForId(oldId, idMap);
              attr.value = t.jsxExpressionContainer(
                t.templateLiteral(
                  [
                    t.templateElement({ raw: "#", cooked: "#" }, false),
                    t.templateElement({ raw: "", cooked: "" }, true),
                  ],
                  [t.identifier(varName)]
                )
              );
            }
          }
        }
      }
    }

    // Recursively traverse child elements
    if (children && Array.isArray(children)) {
      for (const child of children) {
        traverseSvgAst(child, idMap);
      }
    }
  }
}

/**
 * For each old ID, create a unique variable name,
 * for example "gradient" -> "id_gradient"
 */
function getVarNameForId(oldId, idMap) {
  if (idMap.has(oldId)) return idMap.get(oldId);
  const varName = "id_" + oldId.replace(/[^a-zA-Z0-9_]/g, "_");
  idMap.set(oldId, varName);
  return varName;
}

/**
 * Replaces "url(#someId)" with {`url(#${varName})`}
 * Returns a JSXExpressionContainer or null
 */
function replaceUrlIdWithRefs(str, idMap) {
  // Search for occurrences of url(#something)
  // For simplicity, assume there is only one match.
  // For multiple matches, a more complex logic is needed
  const match = str.match(/^url\(#([\w-:.]+)\)$/);
  if (!match) {
    // If the string may contain multiple url(#...), you'd need split/replace, etc.
    return null;
  }
  const oldId = match[1];
  const varName = getVarNameForId(oldId, idMap);

  // Return a JSX expression: {"url(#" + varName + ")"}
  return t.jsxExpressionContainer(
    t.templateLiteral(
      [t.templateElement({ raw: "url(#" }), t.templateElement({ raw: ")" })],
      [t.identifier(varName)]
    )
  );
}

/**
 * This is the main SVGR template. It receives the JSX tree (variables.jsx),
 * traverses it, and replaces IDs with dynamic logic.
 */
module.exports = function template(variables, { tpl }) {
  const rootJsxNode = variables.jsx;

  // A map of oldId -> varName (e.g., "gradient" -> "id_gradient")
  const idMap = new Map();

  // Traverse the tree, collect all IDs
  traverseSvgAst(rootJsxNode, idMap);

  // Build lines like:
  // const id_gradient = React.useId();
  const refDeclarations = [];
  for (const [, varName] of idMap.entries()) {
    refDeclarations.push(`const ${varName} = React.useId();`);
  }

  var componentName = getComponentName(variables.componentName);

  // Compile the final code
  // It's important to return using the tpl`...` template literal
  return tpl`
    ${variables.imports};
    ${variables.interfaces};
    const ${componentName} = (${variables.props}) => {
      ${refDeclarations.join("\n")}
      return (
        ${rootJsxNode}
      );
    };

    export default ${componentName};
  `;
};
