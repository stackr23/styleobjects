// TBD: DRY fixture expectations:
// const expect1 = {'backgroundColor': '#111', 'color': '#000'}
// usw, ...
//
// import assert       from 'assert'
// import nativeCSS    from '../bin/native-css/src/native-css.js'
let fs        = require('fs'),
    assert    = require('assert'),
    nativeCSS = require('../dist/index.js').default

describe('[Input Formats]', function () {
    context('Accept String', function () {
        it('should get a object without any error', done => {

            let filename    = 'test/fixtures/basic.css',
                string      = fs.readFileSync(filename, 'utf-8'),
                result      = nativeCSS.convert(string)

            assert.equal(typeof result, 'object')
            assert.deepEqual(result['a'], {
                'backgroundColor':  '#111',
                'color':            '#000'
            })
            assert.deepEqual(result['b'], {
                'background':     '#222',
                'color':          '#111',
                'fontSize':       '15px'
            })
            assert.deepEqual(result['c'], {
                'color':        '#000'
            })

            done()
        })
    })

    context('Accept Buffer', function () {
        it('should get a object without any error', done => {

            let filename    = 'test/fixtures/basic.css',
                string      = fs.readFileSync(filename, 'utf-8'),
                buffer      = new Buffer(string),
                result      = nativeCSS.convert(buffer)

            assert.equal(typeof result, 'object')
            assert.deepEqual(result['a'], {
                'backgroundColor':  '#111',
                'color':            '#000'
            })
            assert.deepEqual(result['b'], {
                'background':   '#222',
                'color':        '#111',
                'fontSize':     '15px'
            })
            assert.deepEqual(result['c'], {
                'color': '#000'
            })

            done()
        })
    })
    context('Accept Path', function () {
        it('should get a object without any error', done => {

            let fixture     = 'test/fixtures/basic.css',
                result      = nativeCSS.convert(fixture)

            assert.equal(typeof result, 'object')
            assert.deepEqual(result['a'], {
                'backgroundColor':  '#111',
                'color':            '#000'
            })
            assert.deepEqual(result['b'], {
                'background':   '#222',
                'color':        '#111',
                'fontSize':     '15px'
            })
            assert.deepEqual(result['c'], {
                'color': '#000'
            })

            done()
        })
    })
    context('Accept URL ( async )', function () {
        it('should get a object without any error', (done, error) => {
            // TODO: mock this reponse
            nativeCSS.convertAsync('http://raw.githubusercontent.com/raphamorim/native-css/master/test/fixtures/sample.css')
                .then(function (result) {
                    assert.equal(typeof result, 'object')
                    assert.deepEqual(result['a'], {
                        'backgroundColor':  '#111',
                        'color':            '#000'
                    })
                    assert.deepEqual(result['b'], {
                        'background':   '#222',
                        'color':        '#111',
                        'fontSize':     '15px'
                    })
                    assert.deepEqual(result['c'], {
                        'color': '#000'
                    })

                    done()
                })
                .catch(function (err) {
                    assert.deepEqual(err, null)
                    done()
                })
        })
    })
//     __________  ____  ____  ____     __  _____    _   ______  __    _____   ________
//    / ____/ __ \/ __ \/ __ \/ __ \   / / / /   |  / | / / __ \/ /   /  _/ | / / ____/
//   / __/ / /_/ / /_/ / / / / /_/ /  / /_/ / /| | /  |/ / / / / /    / //  |/ / / __
//  / /___/ _, _/ _, _/ /_/ / _, _/  / __  / ___ |/ /|  / /_/ / /____/ // /|  / /_/ /
// /_____/_/ |_/_/ |_|\____/_/ |_|  /_/ /_/_/  |_/_/ |_/_____/_____/___/_/ |_/\____/
    context('Error Handling', function() {
        it('should return ERROR if src is undefined', done => {
            let returnValue = nativeCSS.convert()

            assert.equal(typeof returnValue, 'string');
            assert.equal(returnValue, 'Ooops!\nError: CSS file not found!')

            done()
        })
        it('should return ERROR if path is not found', done => {
            let returnValue = nativeCSS.convert('/var/www/htdocs/dirThatDoesntExist/index.js')

            assert.equal(typeof returnValue, 'string');
            assert.equal(returnValue, 'Ooops!\nError: CSS file not found!')

            done()
        })
    })
})
