let assert    = require('assert'),
    expect    = require('chai').expect,
    nativeCSS = require('../dist/index.js').default

describe('Parser', function() {
    context('output is valid', function() {
        it('should get a object without any error', done => {
            let fixture = 'test/fixtures/basic.css',
                result  = nativeCSS.convert(fixture)

            // got object?
            expect(typeof result).to.equal('object')
            // test class .a
            assert.deepEqual(result['a'], {
                'backgroundColor':  '#111',
                'color':            '#000'
            })
            // test class .b
            assert.deepEqual(result['b'], {
                'background':   '#222',
                'color':        '#111',
                'fontSize':     '15px'
            })
            // test class .c
            assert.deepEqual(result['c'], {
                'color': '#000'
            })

            done()
        })

        it('injects subclasses recursively', function() {
            let fixture = 'test/fixtures/children.css',
                result  = nativeCSS.convert(fixture)

                expect(result.foo.bar.fontSize).to.equal('3rem')
                expect(result.foo.bar.x.fontSize).to.equal('2rem')
                expect(result.foo.bar.x.y.fontSize).to.equal('1rem')
        })
    })

})
