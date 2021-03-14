const fs = require("fs");

const paths = fs.readdirSync(".");
const markdownPaths = paths.filter((path) => path.endsWith(".md"));

for (const path of markdownPaths) {
  const data = fs
    .readFileSync(path, { encoding: "utf8" })
    .replace(/\[\[(.*)\]\]/g, function (match, p1) {
      const path = p1.replace(" ", "%20") + ".md";
      const fileExists = fs.existsSync(path);
      if (fileExists) {
        return `[${p1}](./${path})`;
      }
      return match;
    });
  fs.writeFileSync(path, data);
}
