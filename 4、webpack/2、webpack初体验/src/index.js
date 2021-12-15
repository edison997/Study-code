/* 
  index.js:webpack入口起点文件

  1.运行指令：
    第一个路径就是打包文件，第二个路径就是打包到的路径
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
    生成环境：webpack ./src/index.js -o ./build/built.js --mode=production

  2.结论：
    1.webpack能处理js/json资源，不能处理css/img等其他资源
    2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
    3.生产环境比开发环境多一个js压缩文件
*/


function add (x,y) {

  return x+y
}

console.log(add(2,4))