function sum(a, b) {
    return '结果' + (a + b);
}
console.log(sum(1, 2));
var ts = '11';
ts = "1";
// 数组的自动推断
var arr = [1, true, '222'];
arr.push(null);
arr.push(undefined);
console.log(arr);
// 对象的自动推断
var obj = { name: 'zs', age: 12, open: true, lesson: [{ title: 'js', garde: 33 }] };
obj.age = 33;
obj.lesson.push({ title: 'css', garde: 55 });
console.log(obj.lesson[0].title);
console.log(obj);
