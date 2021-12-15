function add(a, b) {
  return a + b;
}

// 下一行eslint的所有规则都失效（下一行不就行eslint检查）
// eslint-disable-next-line
console.log(add(5,6))