
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* 
  loader：1.下载  2.使用
  plugins：1.下载 2.引入 3.使用

*/


module.exports = {
  //入口文件路径
  entry:'./src/index.js',

  // 打包文件名字和路径
  output: {
    filename:'built.js',
    path:resolve(__dirname,'build')
  },

  // 模块
  module:{
    rules:[]
  },

  //插件
  plugins:[
    //html-webpack-plugin

    //功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({

       //复制./src/index.html,并自动引入打包输出的所有资源 （js/css）
      template:'./src/index.html'
    })


   
    
  ],


  // 模式
  mode:'development'
}