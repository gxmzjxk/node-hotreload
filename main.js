var heapdump = require('heapdump');
// main.js
function cleanCache(modulePath) {
    var module = require.cache[modulePath];
    // remove reference in module.parent
    if (module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1);
    }
    require.cache[modulePath] = null;
}

setInterval(function () {
    var code = require('./code.js');
    cleanCache(require.resolve('./code.js'));
}, 5000);