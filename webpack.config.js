const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'source-map',
  devServer: {
    //服务器基本目录
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8081,
    open: false, //自动打开浏览器
    inline: true, //内联模式
    hot: true, // 自动更新
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'webpack',
      hash: true,
    }),
  ],
}

// console.log(path.resolve(__dirname, './', 'dist'))
// console.log(path.resolve(__dirname, './dist'))
