var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'ElCollapse'));

module.exports = cooking.resolve();

