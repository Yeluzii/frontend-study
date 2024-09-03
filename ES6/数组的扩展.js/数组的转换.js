// from() flat() sort()

// from:对象转数组
// let obj = {
//     0:'a',
//     1:'b',
//     length:2,
// }

// let arrs = Array.from(obj)
// console.log(arrs)

// flat:数组扁平化
// let arrs = [1,2,[3,4,[5]]]
// arrs2 = arrs.flat(Infinity)
// console.log(arrs2)

// sort: 数组排序
let arrs = [3,4,1,8,5]
let res = arrs.sort((e1,e2) => {
    return e1 - e2; // 升序
})
console.log(res)
