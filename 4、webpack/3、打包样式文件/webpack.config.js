/* 
  webpcke.config.js webpack配置

  作用：指示webpak干哪些活（当你运行webpack 指令时，会加载里面的配置）

    所有构建工具都是基于node.js 平台运行的~模块化默认采用commonjs

*/
const {resolve} = require('path');

module.exports = {


  //webpack配置
  entry:'./src/index.js' , // 入口文件
  output:{
    // 输入的文件名
    filename:'built.js',

    // 输出的路径 _dirname nodejs的变量，代表当前文件的目录绝对路径(4、webpack\3、打包样式文件)
    path:resolve(__dirname,'build')
  },


  //loader配置
  module:{
    rules:[
      //详细的loader配置
      {  
        // 匹配的文件
        test:/\.css$/,
        use:[
          // use数组中的loader执行顺序：从右到左，从上到下一次执行
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载中，里面的内容是样式字符串

          "css-loader"
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          // 将less文件编译成css
          // 需要下载 less-loader 和 less
          'less-loader'
        ]
      }
    ]
  },



  // plugins的配置
  plugins:[

  ],


  
  // 模式
  mode:'development',
  // mode:'production'

}