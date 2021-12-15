const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

        /* 
          css见兼容性处理：postcss ==》 postcss-loader postcss-preset-env -D

          帮postcss找到package.json 中browserslist里面的配置。通过配置加载指定的css兼容性样式

          "browserslist":{
            // 开发环境：设置node环境变量：process.env.NODE_EVN = 'development'

            "development":[
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ],
            // 生产环境：默认看生产环境
            "production":[
              ">0.2%",
              "not dead",
              "not op_mini all"
            ]
          }
        */

          //使用loader的默认配置
          // 'postcss-loader',
          //修改loader的配置
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
  new MiniCssExtractPlugin({filename:'css/built.css'})
],

mode:'development'

}