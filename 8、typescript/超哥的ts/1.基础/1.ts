{
  let a: number = 1
  a = 2

  function fn(a: number, b: number): number {
    return a + b
  }

  fn(12, 3)
  // fn(11, '2')

  // 相当于就是c只能是1
  let c: 1
  c = 1
  // c=2


  // d 的赋值只能从这两个值里面选
  let d: 'male' | 'female'
  d = 'male'
  d = 'female'
  // d= 'c'

  let f: boolean | string  //同理


  // 默认就是any类型
  let e;
  e = 1
  e = true

  // 表示位置类型
  let g: unknown;
  g = 1
  g = 's'

  // any类型的值可以赋值给任何的类型，所以不建议使用
  let k:any
  let h:string;
  h = k

  h = 'he'
  // unknown 不能赋值给其他变量
  // h = g 
  // 可以这样进行类型断言,这两种方法都可以
  h = g as string
  h = <string>g


  // void 用来表示空，没有返回值  undefined 和 null 除外
  function fn2():void{

  }

  //  never 表示永远不会有返回结果,一般在抛出错误的时候用

  function fn3():never{
    throw new Error('cuowu')
  }

  fn3()
}