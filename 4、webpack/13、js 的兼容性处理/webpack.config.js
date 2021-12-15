const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },

  module: {
    rules: [
     /* 
        js的兼容性处理：babel-loader @babel/core
          1.基本兼容性处理   @babel/preset-env
            问题：只能转换基本语法，如promise不能转换
          2.全部js兼容性处理   @babel/polyfill  
            问题：解决部分兼容性问题，但是将所有兼容性代码全部引入了，体积太大
          3.按需兼容： core-js  (用这个就不能用第二种)
     */
      {
        test: /\.js$/,
        // 排除
        exclude: /node_modules/,
        loader:'babel-loader',
       
        options: {
          //自动修复
          fix: true,
          // 预设：指示babel做怎样的兼容性处理
          presets:[
            [
              '@babel/preset-nev',
              {
                // 按需加载
                useBuiltIns:'usage',
                // 指定corejs版本
                corejs:{
                  version:3
                },
                // 指定兼容性做到那个版本浏览器
                targets:{
                  chrome:'60',
                  firefox:'60',
                  ie:'9',
                  safari:'10',
                  edge:'17'
                }
              }
            ]
          ]
        }
      }


    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  //   new ESLintPlugin({
  //     fix: true,
  //     extensions: ['js', 'json', 'coffee'],
  //     exclude: '/node_modules/'
  // }),
  ],

  mode: 'development'
}