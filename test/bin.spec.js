const   path        = require('path'),
        // fs          = require('fs'),
        exec        = require('child_process').exec,

        assert      = require('assert'),
        expect      = require('chai').expect,

        binPath     = path.resolve(path.join(process.cwd(), 'bin', 'index.js'))

let _error, _stderr, _stdout

describe('[BIN]', () => {
    context('Command should fail without arguments', function() {
        before(function(done) {
            exec('node ' + binPath, function(error, stdout, stderr) {
                _error  = error
                _stderr = stderr
                // _stdout = stdout // unused

                done()
            })
        })

        it('Error: Command failed', () => {
            expect(_error + '').to.contain('Command failed')
        })

        it('should demand option --input', () => {
            expect(_stderr).to.contain('Missing required argument: input')
        })
    })

})
