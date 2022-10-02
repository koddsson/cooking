const slugify = require("slugify");

module.exports = function (eleventyConfig) {
  // Re-write [[WikiLinks]] to normal markdown links.
  eleventyConfig.setLibrary("md", require("markdown-it")().use(require('./link-plugin.js')()))

  // Make sure `.js` files are copied to the `_site` directory
  eleventyConfig.setTemplateFormats(["md", "js"]);

  // Create a JSON filter to make debugging a little easier.
  eleventyConfig.addLiquidFilter("json", JSON.stringify);
};
