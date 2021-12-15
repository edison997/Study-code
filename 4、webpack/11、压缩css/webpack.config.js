const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

//压缩插件 optimize-css-assets-webpack-plugin

// 设置node环境变量

process.env.NODE_ENV = 'development';
module.exports = {
entry:'./src/js/index.js',

output:{
  filename:'js/built.js',
  path:resolve(__dirname,'build')
},

module:{
  rules:[
    {
      test:/\.css$/,
      use:[
        // 创建style标签，将样式放入
        // 'style-loader',

        // 这个loader取代style-loader  作用：提取js中的css成单独文件
        MiniCssExtractPlugin.loader,
        // 将css文件文件整合到js中
        'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions:{
                ident: 'postcss',
                plugins: () => [
                  // postcss的插件
                  require('postcss-preset-env')()
                ]
              }
            }
          }
        ]
    }
  ]
},

plugins:[
  new HtmlWebpackPlugin({template:'./src/index.html'}),

  // 对输出名字重命名
  new MiniCssExtractPlugin({filename:'css/built.css'}),

  // 压缩css
  new OptimizeCssAssetsWebpackPlugin()
],

mode:'development'

}