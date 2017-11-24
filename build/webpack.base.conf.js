const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
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
    plugins: [
        new CleanWebpackPlugin(['lib/'], { root: path.resolve(__dirname, '..') }),
        new HtmlWebpackPlugin({
            title: 'element-imitate',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './lib'
    }
};
