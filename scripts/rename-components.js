const fs = require("fs");
const path = require("path");
const iconData = require("./icon-data");

const idToKey = Object.entries(iconData.iconMetaData).reduce(
  (acc, [key, val]) => {
    acc[val.id.toUpperCase()] = key;
    return acc;
  },
  {}
);

const directories = [
  path.join(__dirname, "../src/components/dark"),
  path.join(__dirname, "../src/components/light"),
];

directories.forEach((dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const ext = path.extname(file);
      const base = path.basename(file, ext);

      if (ext === ".tsx" && idToKey[base]) {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, `${idToKey[base]}.tsx`);

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(
              `Failed to rename ${file} -> ${idToKey[base]}.tsx:`,
              err
            );
          } else {
            console.log(`Renamed ${file} -> ${idToKey[base]}.tsx`);
          }
        });
      }
    });
  });
});
