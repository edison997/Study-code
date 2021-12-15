// import '@babel/polyfill';

const add = (a, b) => a + b;

// 下一行eslint的所有规则都失效（下一行不就行eslint检查）
// eslint-disable-next-line
console.log(add(5,6))

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('11111');
    resolve();
  }, 1000);
});

console.log(promise);
