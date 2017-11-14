var path = require('path');
var webpack = require('webpack');
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
        }]
    }
};