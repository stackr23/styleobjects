'use strict'

import path             from 'path'
import nativeCSS        from '../src'
import logger           from '../utils/log'

const ROOT              = path.resolve(path.join(__dirname, '..'))
const defaultOutputPath = process.cwd()

const setFileExt = (basename, ext = 'js') =>
    basename.split('.').shift() + '.' + ext

const yargs             = require('yargs')
    .help('h')
    .option('version',  {alias: 'v'})
    .option('input',    {alias: 'i'/* , type: 'string' */})
    .option('output',   {
        describe:       'output path - filename || dir',
        demandOption:   true,
        alias:          'o',
        type:           'string',
        default:        defaultOutputPath
    })
    .option('reactNative', {
        boolean:    true,
        type:       'boolean',
        default:    false
    })
    .demandOption(['input'])
    .argv

let _input              = path.resolve(yargs.input),
    input               = _input,
    inputBasename       = path.basename(input),
    _outputPath         = path.resolve(yargs.output),
    outputPath          = _outputPath,
    outputBasename      = path.basename(outputPath),
    fileName

// TBD: refactor: options verification
// outputbasename + noSuchFile
//  =>  missing '{'
//
// => check source or throw error

// get filename (output-filename > input.filename)
if (~outputBasename.indexOf('.')) {
    fileName    = setFileExt(outputBasename)
}
else if(~inputBasename.indexOf('.')){
    fileName    = setFileExt(inputBasename)
    // add the new filename to the outputPath
    outputPath  = path.join(outputPath, fileName)
}
else {
    logger.error('"styleobjects" couldn\'t determine output filename')
}

const styleObject = nativeCSS.convert(input)
nativeCSS.generateFile(styleObject, outputPath, yargs.reactNative)

//     __    ____  ______   ____  __________  __  ________   _____   ____________
//    / /   / __ \/ ____/  / __ \/ ____/ __ )/ / / / ____/  /  _/ | / / ____/ __ \
//   / /   / / / / / __   / / / / __/ / __  / / / / / __    / //  |/ / /_  / / / /
//  / /___/ /_/ / /_/ /  / /_/ / /___/ /_/ / /_/ / /_/ /  _/ // /|  / __/ / /_/ /
// /_____/\____/\____/  /_____/_____/_____/\____/\____/  /___/_/ |_/_/    \____/
logger.debug('"styleobjects" called with:' + '\n'
+   '    --input:  ' + JSON.stringify(_input) + '\n'
+   '    --output: ' + JSON.stringify(outputPath)
// TODO:    refactor: outputPath - orig, modified, defaulted, ...
// debug info should log passed arg --output | -o
+   (_outputPath === defaultOutputPath ? ' (default)' : '')
// +   '\n\n' // add blank line
// +   '    fileName = ' + JSON.stringify(fileName) + '\n'
)
