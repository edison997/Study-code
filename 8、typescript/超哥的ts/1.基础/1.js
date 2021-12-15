{
    var a = 1;
    a = 2;
    function fn(a, b) {
        return a + b;
    }
    fn(12, 3);
    // fn(11, '2')
    // 相当于就是c只能是1
    var c = void 0;
    c = 1;
    // c=2
    // d 的赋值只能从这两个值里面选
    var d = void 0;
    d = 'male';
    d = 'female';
    // d= 'c'
    var f = void 0; //同理
    // 默认就是any类型
    var e = void 0;
    e = 1;
    e = true;
    // 表示位置类型
    var g = void 0;
    g = 1;
    g = 's';
    // any类型的值可以赋值给任何的类型，所以不建议使用
    var k = void 0;
    var h = void 0;
    h = k;
    h = 'he';
    // unknown 不能赋值给其他变量
    // h = g 
    // 可以这样进行类型断言,这两种方法都可以
    h = g;
    h = g;
    // void 用来表示空，没有返回值  undefined 和 null 除外
    function fn2() {
    }
    //  never 表示永远不会有返回结果,一般在抛出错误的时候用
    function fn3() {
        throw new Error('cuowu');
    }
    fn3();
}
