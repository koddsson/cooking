const fs = require("fs");

const paths = fs.readdirSync(".");
const markdownPaths = paths.filter((path) => path.endsWith(".md"));

for (const path of markdownPaths) {
  const data = fs
    .readFileSync(path, { encoding: "utf8" })
    .replace(/\[\[(.*)\]\]/, "[$1]($1.md)");
  fs.writeFileSync(path, data);
}
