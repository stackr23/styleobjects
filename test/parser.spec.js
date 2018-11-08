let assert    = require('assert'),
    expect    = require('chai').expect,
    nativeCSS = require('../src/indexBabelRegister.js')

describe('Parser', function() {
    context('Valid CSS (only classes)', function() {
        it('should get a object without any error', done => {
            let fixture = 'test/fixtures/sample.css',
                result  = nativeCSS.convert(fixture)

            // got object?
            expect(typeof result).to.equal('object')
            // test class .a
            assert.deepEqual(result['a'], {
                'backgroundColor': '#111',
                'color': '#000'
            })
            // test class .b
            assert.deepEqual(result['b'], {
                'background': '#222',
                'color': '#111',
                'fontSize': '15px'
            })
            // test class .c
            assert.deepEqual(result['c'], {
                'color': '#000'
            })

            done()
        })
    })
})
