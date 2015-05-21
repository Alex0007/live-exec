module.exports = function() {
    var child = require('child_process').exec.apply(null, arguments)
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
}
