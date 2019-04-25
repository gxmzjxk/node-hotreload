var fs = require('fs');
var express = require('express');
var app = express();
var router = require('./router.js');

app.use(function (req, res, next) {
    // 利用闭包的特性获取最新的router对象，避免app.use缓存router对象
    router(req, res, next);
});

function cleanCache(modulePath) {
    require.cache[modulePath] = null;
}

// 监听文件修改重新加载代码
fs.watch(require.resolve('./router.js'), function () {
    cleanCache(require.resolve('./router.js'));
    try {
        router = require('./router.js');
    } catch (ex) {
        console.error('module update failed');
    }
});

app.listen(3000);