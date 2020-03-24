var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/bin/www',
    target: 'node',
    node: {
        __dirname: true
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'backend.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    //"babel-loader",
                    "eslint-loader",
                ],
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/public'),
            to: 'src/public'
        },
        {
            from: path.resolve(__dirname, 'src/views'),
            to: 'src/views'
        }
        ])

    ],
    externals: nodeModules,
    devtool: 'sourcemap'
}