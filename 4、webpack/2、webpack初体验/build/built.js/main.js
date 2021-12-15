/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* \r\n  index.js:webpack入口起点文件\r\n\r\n  1.运行指令：\r\n    第一个路径就是打包文件，第二个路径就是打包到的路径\r\n    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development\r\n    生成环境：webpack ./src/index.js -o ./build/built.js --mode=production\r\n\r\n  2.结论：\r\n    1.webpack能处理js/json资源，不能处理css/img等其他资源\r\n    2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化\r\n    3.生产环境比开发环境多一个js压缩文件\r\n*/\r\n\r\n\r\nfunction add (x,y) {\r\n\r\n  return x+y\r\n}\r\n\r\nconsole.log(add(2,4))\n\n//# sourceURL=webpack://wevpack_test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;