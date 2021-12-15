// 一般不这样使用，万物皆对象
var a;
a = {};
a = function fn() { };
// ?表示可以不传值，但是没有问号的必须要传值（声明多少个就传多少个）
var b;
b = { name: "zs", age: 12 };
// 这个就是表示必须要有name属性，其他可以随便加
var c;
c = { name: 'zs', age: 99 };
// 还可以定义函数的结构
var d;
d = function (a, b) {
    return 1;
};
// 数组  两种写法一个意思
var e;
var f;
// 元组 有几个类型就只能写几个元素
var g;
g = [true, "s"];
// 枚举enum
var gender;
(function (gender) {
    gender[gender["\u7537"] = 0] = "\u7537";
    gender[gender["\u5973"] = 1] = "\u5973";
})(gender || (gender = {}));
var h;
h = { name: 'zs', gen: gender.女 };
console.log(h);
// & 的使用 
var j;
j = { name: 'zs', age: 11 };
var k;
var l;
k = 2;
l = 3;
