/* 
开发环境的配置：能让代码运行

运行项目指令：
  webpack 会将打包结果输出出去
  npx webpack—dev-server 只会在内存中编译打包，没有输出

*/
const {resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


 module.exports = {
  //  入口文件地址
  entry:'./src/index.js',
  output:{
    // 输出的文件名字，地址
    filename:'js/built.js' ,
    path:resolve(__dirname,'build')   
  },
  module:{
    // 配置规则
    rules:[
      {
        // 处理css
        test:/\.css$/,
        use:['style-loader','css-loader']
      },{
        // 处理less
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },{
        //处理图片
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader',  //可以压缩资源，file-loader输出原资源，单个的就直接写loader
        options:{
          limit:8*1024,
          name:'[hash:10].[ext]',
          esModule:false,
          outputPath:'img'
        },
        type: 'javascript/auto'
      },{
        //处理html中的img图片
        test:/\.html$/,
        loader:'html-loader',
        options:{
          esModule:false,
          
        }
      },{
        // 处理其他资源
        exclude:/\.(css|html|js|less|jpg|png|gif)$/,
        loader:'file-loader',
        options:{
          // 文件名字10个字符
          name:'[hash:10].[ext]',
          outputPath:'media'
        }
      },
      
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      // 模板
      template:'./src/index.html'
    })
  ],
  devServer:{
    // 之前创建的文件的地址
    contentBase:resolve(__dirname,"build"),
    // //启动gzip压缩
    compress:true,
    // 端口号
    port:3000,
    // 自动打开浏览器
    open:true
  },
  mode:'development'
 }