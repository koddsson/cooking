const fs = require('fs/promises')
const glob = require('glob')

function replaceLink(link, env) {
  // console.log(link, env)
  if (!link.startsWith('.')) return
  //console.log(link, env)
}

const md = require('markdown-it')({ replaceLink }).use(require('markdown-it-replace-link'))
const files = glob.sync('./recipes/*.md')

module.exports = {
  something: async () => {
    for (const filename of files) {
      //md.render(filename)
    }
    return 'poop'
  }
};
