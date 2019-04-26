// code.js
var array = [];

for (var i = 0; i < 100000; i++) {
    array.push('mem_leak_when_require_cache_clean_test_item_' + i);
}

module.exports = array;