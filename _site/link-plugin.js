const Plugin = require('markdown-it-regexp')
const extend = require('extend')
const sanitize = require('sanitize-filename')
    
function postProcessPageName(pageName) {
  pageName = pageName.trim()
  pageName = pageName.split('/').map(sanitize).join('/')
  pageName = pageName.replace(/\s+/, '_')
  return pageName
}
  
function isAbsolute(pageName) {
  return pageName.charCodeAt(0) === 0x2F/* / */
}
  
function removeInitialSlashes(str) {
  return str.replace(/^\/+/g, '')
}

module.exports = () => {
  return Plugin(
    /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
    (match, utils) => {
      let label = ''
      let pageName = ''
      let href = ''
      const isSplit = !!match[3]
      if (isSplit) {
        label = match[3]
        pageName = match[1]
      }
      else {
        label = match[1]
        pageName = label
      }

      label = label.trim()
      pageName = postProcessPageName(pageName)

      // make sure none of the values are empty
      if (!label || !pageName) {
        return match.input
      }

      if (isAbsolute(pageName)) {
        pageName = removeInitialSlashes(pageName)
        href = `/${pageName}.html`
      }
      else {
        href = `./${pageName}.html`
      }
      href = utils.escape(href)

      console.log(label, href, utils)

      return `<a href="${href}">${label}</a>`
    }
  )
}
