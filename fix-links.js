const fs = require("fs");

const paths = fs.readdirSync(".");
const markdownPaths = paths.filter((path) => path.endsWith(".md"));

for (const path of markdownPaths) {
  const data = fs
    .readFileSync(path, { encoding: "utf8" })
    .replace(/\[\[(.*)\]\]/g, function (_, capture) {
      const path = capture.replace(" ", "%20") + ".md";
      const fileExists = fs.existsSync(path);
      if (fileExists) {
        return `[${capture}](./${path})`;
      }
      return capture;
    });
  fs.writeFileSync(path, data);
}
