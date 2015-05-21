var assign = Object.assign || require('object.assign')

module.exports = function() {

    if (typeof arguments[1] === 'object') { // extend provided env with process.env
        arguments[1].env = assign(process.env, arguments[1].env)
    }

    var child = require('child_process').exec.apply(null, arguments)
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
}
