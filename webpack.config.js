var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
var STYLES_DIR = path.resolve(__dirname,'src/css');
var config = {
    entry: [ 
        APP_DIR + '/index.jsx',
        STYLES_DIR + '/main.scss'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: "#eval-source-map",
    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                      publicPath: 'images/'
                  }
                }]
              },
        ]
    }
};

module.exports = config;