

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/index.js',

  output:{
    filename:'built.js',
    path:resolve(__dirname,'build'),
    
    
  },

  module:{
    rules:[
      {
        test:/\.less$/,
        use: ['style-loader','css-loader','less-loader']
      }, 
      {
        //处理图片(不能处理html中的图片)
        test:/\.(jpg|png|gif)$/,

        // 只配置一个loader时，下载url-loader和file-loader
        loader: 'url-loader',
        
        options:{
          // 图片小于8kb，就会被base64处理
          //优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,

          // 问题：应为url—loader默认使用es6模块化解析，而html-loader引入图片是commomjs
          //解析会出问题：【object Module】
          // 解决：关闭url——loader的es6模块化，使用commonjs解析
          esModule:false,

          // 图片名取hash值的前十位，【ext】取文件本来的格式
          name:'[hash:10].[ext]'
        },
        type: 'javascript/auto'
      },
      
      

      {
        test:/\.html$/,
        //处理html文件的img图片（负责引入img，从而被url—loader进行处理）
        loader:'html-loader',
        options:{
          esModule:false,
        }
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],

  mode:"development"



}