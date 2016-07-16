//配置环境
var webpack = require('webpack');
var path = require('path');
/**
 * 全局路径配置
 */
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var MVC_PATH = path.resolve(ROOT_PATH, 'MVC');

// publicPath,和页面引用保持一致
var publicPath = 'http://127.0.0.1:3000/dist/';

//定位文件
var alias = {
    MVC: path.resolve(ROOT_PATH, 'MVC')
};

var plugins = [];
var entry = {
    index: path.resolve(ROOT_PATH, 'MVC/test.js')
};
var output = {
    path: BUILD_PATH,
    filename: 'js/[name].js',
    publicPath: publicPath
};
var devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    color: true,
    port: 3002,
    host: '127.0.0.1',  // 10.6.131.79
    contentBase: './'
};


module.exports = {
    entry: entry,
    output: output,
    devtool: '#source-map',
    devServer: devServer,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
        ]
    },
    plugins: plugins
};
