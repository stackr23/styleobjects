'use strict'
//
//    _____________  ____    __________  ____      _________________________
//   / ___/_  __/\ \/ / /   / ____/ __ \/ __ )    / / ____/ ____/_  __/ ___/
//   \__ \ / /    \  / /   / __/ / / / / __  |_  / / __/ / /     / /  \__ \
//  ___/ // /     / / /___/ /___/ /_/ / /_/ / /_/ / /___/ /___  / /  ___/ /
// /____//_/     /_/_____/_____/\____/_____/\____/_____/\____/ /_/  /____/
//
//  special thanks to Raphael Amorim (@raphamorim) for the core concept,
//  because this is basicly a remake of nativeCSS (https://github.com/raphamorim/native-css)
//

import fs               from 'fs'
import cssParser        from 'css'
import {fetchUrl}       from 'fetch'

import transformRules   from './lib/transformRules.js'

class styleObjects {

    indentObject (obj, indent) {
      var self = this,
        result = ''
      return JSON.stringify(obj, null, indent || 0)
    }

    nameGenerator (name) {
      name = name.replace(/\s\s+/g, ' ')
      name = name.replace(/[^a-zA-Z0-9]/g, '_')
      name = name.replace(/^_+/g, '')
      name = name.replace(/_+$/g, '')
      return name
    }

    mediaNameGenerator (name) {
      return '@media ' + name
    }

    transform (css) {
      var result = {}
      transformRules(this, css.stylesheet.rules, result)
      return result
    }

    isUrl (str) {
      // feel free to use a better pattern
      var pattern = new RegExp('^(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i')
      if (!pattern.test(str)) {
        return false
      }
      return true
    }

    fetchUrlAsync (cssFile) {
      return new Promise(function(resolve, reject) {
        fetchUrl(cssFile, function(err, meta, body) {
          if (err) throw err
          try {
            resolve(body.toString())
          } catch (err) {
            reject(err)
          }
        })
      })
    }

    convertAsync (cssFile) {
      var self = this,
        path = process.cwd() + '/' + cssFile,
        error

      return new Promise(function(resolve, reject) {
        if (!self.isUrl(cssFile)) {
          if ((require('fs').existsSync(path))) {
            var css = fs.readFileSync(path, 'utf-8')
            css = cssParser.parse(css, {
              silent: false,
              source: path
            })
            return resolve(self.transform.apply(self, css))
          } else {
            reject(new Error('Ooops!\nError: CSS file not found!'))
          }
        } else {
          return self.fetchUrlAsync(cssFile)
            .catch(function(err) {
              reject(err)
            })
            .then(function(css) {
              var css = cssParser.parse(css, {
                silent: false,
                source: path
              })
              resolve(self.transform(css))
            })
        }
      })
    }

    convert (cssFile) {
      var self = this,
        path = cssFile,
        css

      // PATH given
      if ((require('fs').existsSync(path))) {
        css = fs.readFileSync(path, 'utf-8')
      }
      // STRING given
      else if (typeof cssFile === 'string') {
        // TBD: refactor file/string verification
        if (!~cssFile.indexOf('{')) {
          return 'Ooops!\nError: CSS file not found!'
        }
        css = cssFile
      }
      // Buffer given
      else if (cssFile instanceof Buffer) {
        css = cssFile.toString()
      }
      // URL given
      else if (this.isUrl(cssFile)) {
        return this.convertAsync(cssFile)
      }
      // unknown format
      else {
        return 'Ooops!\nError: CSS file not found!'
      }


      css = cssParser.parse(css, {
        silent: false,
        source: path
      })

      return self.transform(css)
    }

    generateFile (obj, where, react) {
      if (!where || where.indexOf('--') > -1)
        return console.log('Please, set a output path!')

      var self = transformhis,
        body

      if (react) {
        fs.writeFileSync(where, 'var styles = StyleSheet.create({\n')
        body = self.indentObject(obj, 2)
        fs.appendFileSync(where, body + '\n})')
        return
      }

      body = self.indentObject({
        'styles': obj
      }, 2)

      fs.writeFileSync(where, body)
    }
}

export default (new styleObjects())
