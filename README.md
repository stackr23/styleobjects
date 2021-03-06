# @stackr23/styleobjects
> transform stylesheets to JS objects

[![Build Status](https://travis-ci.com/stackr23/styleobjects.svg?branch=master)](https://travis-ci.com/stackr23/styleobjects)
[![npm version](https://badge.fury.io/js/%40stackr23%2Fstyleobjects.svg?v140)](http://npm.im/@stackr23/styleobjects) [![Greenkeeper badge](https://badges.greenkeeper.io/stackr23/styleobjects.svg)](https://greenkeeper.io/)
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)

[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/styleobjects/graphs/
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

__style.css__
```css
.test   { font-size: 20px; }
.test23 { padding-top: 5px; }
.test23 .testInner { font-decoration: none; }
```

__output.js__
```javascript
{
    test:   {'fontSize': '20px'},
    test23: {
        'fontSize': '23px',
        testInner: {'fontDecoration': 'none'}
    }
}
```

## CLI usage

```bash
npm install -g @stackr23/styleobjects  
npx @stackr/styleobjects --input ./style.css --output ./output.js
```

__--input__&nbsp;&nbsp;&nbsp;- {`String:path` | `String` | `URL` | `Buffer`} - __required__  
__--outout__&nbsp;- {`String:path`}

## webpack usage
> __[@stackr/styleobjects-loader](https://github.com/stackr23/styleobjects-loader)__

## v2 roadmap  
* [ ] ? add eslint
* [x] refactor core
    * [x] handle subclasses recursively  
    * [ ] issue #3
    * [x] ES7
        * [x] @babel/register
        * [x] build into /dist
        * [ ] refactor build process (rollup? backpack?)
* [x] mocha tests 
    * [x] unit tests 
    * [x] test /bin
* [ ] proper option handling
    * [x] add yargs
    * [ ] --output-type as (json | module | echo)

## inspiration
* [nativeCSS](https://github.com/raphamorim/native-css)  
* [css-objects-loader](https://github.com/pl12133/css-object-loader)
