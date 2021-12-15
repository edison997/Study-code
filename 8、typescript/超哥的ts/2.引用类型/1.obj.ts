
// 一般不这样使用，万物皆对象
let a: object
a = {}
a = function fn() { }

// ?表示可以不传值，但是没有问号的必须要传值（声明多少个就传多少个）
let b: { name: string, age: number, sex?: string }
b = { name:"zs",age:12}

// 这个就是表示必须要有name属性，其他可以随便加
let c :{name:string,[key:string]:any}
c = {name:'zs',age:99}


// 还可以定义函数的结构
let d:(n1:number,n2:number) => number
d = function (a,b){
  return 1
}

// 数组  两种写法一个意思
let e:string[] 
let f:Array<number>


// 元组 有几个类型就只能写几个元素
let g:[boolean,string]
g= [true,"s"]

// 枚举enum 自增长 第一个默认是0，也可以给他设置值
enum gender {
  男,
  女 
}

let h:{name:string,gen:gender}
h = {name:'zs',gen:gender.女}

console.log(h);


// & 的使用 
let j : {name:string} & {age:number}
j = {name:'zs',age:11,}

// type 的使用 类型的别名(后面还有interface)
type num =  1|2|3

let k : num
let l : num

k=2
l=3