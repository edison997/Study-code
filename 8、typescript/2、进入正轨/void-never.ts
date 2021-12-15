// void只能是null 或者是undefined
let a: void = undefined
a = null
console.log(a);

function fun(): void | string {
  return 'zs'
}
console.log(fun())

// never 不是任何类型
function fn():never {
  throw new Error('失败了')
}
fn()