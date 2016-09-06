var Path = require('path');
var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    lib: Path.join(__dirname, '../dist'),
    src: Path.join(__dirname, './'),
    build: Path.join(__dirname, './dist'),
    node_modules: Path.join(__dirname, '../node_modules')
};

const config = {
    entry: [
        PATHS.src
    ],
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    module: {
        preLoaders: [ {
            test: /\.css$/,
            loaders: [ 'postcss-loader' ],
            include: [ PATHS.lib, PATHS.src ]
        } ],
        loaders: [ {
            test: /\.jsx?$/,
            loaders: [ 'babel-loader' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.scss$/,
            loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.less$/,
            loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [ 'url-loader?limit=8192' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.(woff|woff2)(2)?(\?v=[0-9].[0-9].[0-9])?$/,
            loaders: [ 'url-loader?limit=10000&mimetype=application/font-woff' ],
            include: [ PATHS.src, PATHS.example ]
        }, {
            test: /\.(eot|ttf|svg)(\?v=[0-9].[0-9].[0-9])?$/,
            loaders: [ 'file-loader?name=[name].[ext]' ],
            include: [ PATHS.lib, PATHS.src ]
        }, {
            test: /\.json$/,
            loaders: [ 'json-loader' ]
        } ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: Path.join( PATHS.src, 'index.html' )
        })
    ]
};

module.exports = config;