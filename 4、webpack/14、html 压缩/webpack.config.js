const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        // 移除空格
        collapseWhitespace:true,

        // 移除注释
        removeComments:true
      }
    }),
  ],
// 生产环境自动压缩代码
  mode: 'production'
}