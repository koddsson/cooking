const slugify = require('slugify')
const fs = require('fs')
const glob = require('glob')
const {basename} = require('path')

function slug(string) {
  return slugify(string, {lower: true})
}

const graph = {
  nodes: [],
  links: []
}

const files = glob.sync('./recipes/*.md')
for (const filename of files) {
  const source = slug(basename(filename, '.md'))
  graph.nodes.push({id: source})
  const contents = fs.readFileSync(filename, 'utf8')
  const matches = contents.matchAll(/\[\[(.*)\]\]/gm)
  for (const match of matches) {
    const target = slug(match[1])
    graph.links.push({source, target})
  }
}

module.exports = {
  permalink: data => {
    return `${slug(data.page.fileSlug)}/`
  },
  graph: () => {
    return graph
  }
}
