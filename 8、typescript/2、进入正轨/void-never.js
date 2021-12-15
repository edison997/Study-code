"use strict";
// void只能是null 或者是undefined
var a = undefined;
a = null;
console.log(a);
function fun() {
    return 'zs';
}
console.log(fun());
// never 不是任何类型
function fn() {
    throw new Error('失败了');
}
fn();
