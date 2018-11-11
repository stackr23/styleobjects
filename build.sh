#/bin/bash
#
# TBD: refactor: build scripts with ? nodemon | rollup | backpack?
rm dist/* -rf

babel ./src/index.js --out-file ./dist/index.js --source-maps inline --presets minify
babel ./src/lib/* --out-dir ./dist/lib --source-maps inline --presets minify
