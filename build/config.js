var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
    externals[`element-imitate/packages/${key}`] = `element-imitate/lib/${key}`;
});

externals['element-imitate/src/locale'] = 'element-imitate/lib/locale';
utilsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`element-imitate/src/utils/${file}`] = `element-imitate/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`element-imitate/src/mixins/${file}`] = `element-imitate/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`element-imitate/src/transitions/${file}`] = `element-imitate/lib/transitions/${file}`;
});

externals = [Object.assign({
}, externals)];

exports.externals = externals;

exports.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    main: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'element-imitate': path.resolve(__dirname, '../')
}

exports.vue = {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/poper\.js|utils\/date\.js/;
