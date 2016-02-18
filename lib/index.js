// Dependencies
var babelTemplate = require('babel-template')
var _ = require('lodash')

// Public
module.exports = function () {
  return {
    visitor: {
      ExportDefaultDeclaration: function (path) {
        topNodes = []
        topNodes.push(babelTemplate("return exports['default']")())
        path.insertAfter(topNodes);
      }
    }
  }
}
