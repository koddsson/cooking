const markdownIt = require("markdown-it");
const slugify = require('slugify');
const links = []

function replaceLink(link, env) {
  if (link.startsWith('./')) {
    link = link.slice(1)
  }
  if (link.endsWith('.md')) {
    link = link.replace('.md', '/')
  }

  if (!env.page.links) {
    env.page.links = []
  }
  if (!link.startsWith('http')) {
    env.page.links.push({source: env.page.fileSlug, target: slugify(link)})
  }
  
  return link
}

module.exports = function(eleventyConfig) {

  // Re-write [[WikiLinks]] to normal markdown links.
  eleventyConfig.setLibrary("md", markdownIt({ replaceLink }).use(require('markdown-it-replace-link')))

  // Make sure `.js` files are copied to the `_site` directory
  eleventyConfig.setTemplateFormats([
    "md",
    "js" 
  ]);

  // Create a JSON filter to make debugging a little easier.
  eleventyConfig.addLiquidFilter("json", JSON.stringify)
};
