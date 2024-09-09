// const foods = ['烤鸡','啤酒','烧烤']
// let [a,b,c] = foods
// console.log(a)
// console.log(b)
// console.log(c)

// 数组的嵌套结构
var foods = ['烤鸡', ['啤酒', '烧烤', ['烤鸡腿', '烤羊肉']]]
let [a, [b1, b2, [c1, c2]]] = foods
console.log(a)
console.log(b1,b2)
console.log(c1,c2)