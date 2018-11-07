'use strict'

var nativeCSS = require('./native-css'),
  commands = process.argv

var react = (commands.indexOf('--react') > -1),
  outputPath = commands[3] || false

var css = nativeCSS.convert(commands[2])

nativeCSS.generateFile(css, outputPath, react)
