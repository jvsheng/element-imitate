// Karma configuration
// Generated on Tue Nov 14 2017 14:01:46 GMT+0800 (中国标准时间)
const webpackConfig = require('../../build/webpack.test.conf');

module.exports = function(config) {
    config.set({

        browsers: ['PhantomJS'],

        frameworks: ['mocha', 'chai'],

        reporters: ['spec', 'coverage'],

        files: ['./index.js'],

        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        }
    })
};
