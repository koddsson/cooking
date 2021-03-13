const fs = require("fs");

const paths = fs.readdirSync(".");
const markdownPaths = paths.filter((path) => path.endsWith(".md"));

for (const path of markdownPaths) {
  const data = fs
    .readFileSync(path, { encoding: "utf8" })
    .replace(/\[\[(.*)\]\]/, function (_, p1) {
      const url = p1.replace(" ", "%20");
      return `[${p1}](./${url}.md)`;
    });
  fs.writeFileSync(path, data);
}
