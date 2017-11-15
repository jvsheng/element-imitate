const path = require('path');
const webpack = require('webpack');

module.exports={
    module:{
        loaders:[{
            test:/\.js$/,
            loader:'babel-loader',
            query:{
                presets:['es2015']
            },
            exclude:[
                path.resolve( __dirname, '../node_modules' )
            ]
        }, {
            test: /\.js$/,
            use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.js$/,
        }]
    }
};