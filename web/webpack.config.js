/**
 * Created by chenjunsheng on 2017/2/4.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: 'chunk_[id].js'
    },
    //enable dev source map
    devtool: 'source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/api/*': {
                target: '127.0.0.1:8090',
                secure: false
            }
        }
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test:/\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'postcss', 'less']
            },
            {
                test: /\.css$/,
                loaders: ['classnames', 'style', 'css', 'postcss']
            },
            {
                test: /\.styl/,
                loader:  'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]!postcss-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 6 versions'] }),
        pxtorem({
            rootValue: 100,
            propWhiteList: [],
        }),
    ],
    plugins: [
        new HtmlwebpackPlugin({
            title: 'particalGo-web',
            template: path.resolve(APP_PATH, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            __DEV__: true,
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.jsx']
    }
};
