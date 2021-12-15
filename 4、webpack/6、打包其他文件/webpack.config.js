
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/index.js',

  output: {
    filename:'built.js',
    path:resolve(__dirname,'build')
  },

  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },{
        //排除css/js/html资源
        exclude:/\.|(css|js|html)$/,
        loader:'file-loader',
        options:{
          name:'[hash:10].[ext]'
        }
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],

  mode:'development',
  devServer:{
    contentBase:resolve(__dirname,'build'),
    //启动gzip压缩
    compress:true,
    //端口号
    port:3000,
    //自动打开浏览器
    open:true
  }


}