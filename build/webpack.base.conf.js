const path = require('path');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'index.[hash].js',
        path: path.resolve(__dirname, '../lib'),
        library: 'ELEMENT',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: config.jsexclude
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias
    },
    externals: {
        vue: config.vue
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../lib')),
        new HtmlWebpackPlugin({
            title: 'element-imitate'
        })
    ],
    devtool: 'inline-source-map'
};
