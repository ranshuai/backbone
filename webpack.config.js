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
var publicPath = 'http://127.0.0.1:3002/dist/';

//定位文件
var alias = {
    MVC: path.resolve(ROOT_PATH, 'MVC')
};

var plugins = [];
var entry = {
    index: path.resolve(ROOT_PATH, 'MVC/index.js')
};
var output = {
    path: BUILD_PATH,
    filename: 'js/[name].js',
    publicPath: publicPath
};
//代理

var devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    color: true,
    port: 3002,
    host: '127.0.0.1',  // 10.6.131.79
    contentBase: './',   // 访问的文件以哪为起点寻找路径
    //代理
    proxy: {
        '/site/*':{ //属性与api接口要保持一至
            target: 'http://kehai.com', //
            secure: false
        },
        '/perfectInfo/*':{ //属性与api接口要保持一至
            target: 'http://kehai.com', //
            secure: false
        },
        '/schoolListData.do': { //初始化的接口 如果接口是触发事件之后动态创建的就走通配符的属性
            target: 'http://kehai.com/site/siteSchoolList/1/ignore/ignore/ignore/ignore/000',
            secure: false,
            bypass: function(req, res, proxyOptions){
                // console.log(req.headers);
            }
        }
    }

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
