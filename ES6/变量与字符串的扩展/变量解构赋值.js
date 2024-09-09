var foods = {
    best: '小龙虾',
    good: '火锅',
    normal: '快餐',
    bad: '方便面',
}

// // 获取 foods 中的 best 和 bad
// var best = foods.best
// var bad = foods.bad

// console.log(best)
// console.log(bad)

// // 解构赋值
var { best, bad } = foods
console.log('best', best)

var { best: best1, bad: bad1,hate } = foods
console.log(best1)
console.log(bad1)
console.log(hate) // undefined

// const address = {
//     city: {
//         name: '北京市',
//         area: {
//             name: '海淀区',
//             school: {
//                 name: '北京大学',
//             },
//         },
//     },
// }

// 传统写法分别取出属性
// console.log(address.city.name)
// console.log(address.city.area.name)
// console.log(address.city.area.school.name)

// // 嵌套解构
// let {
//     city: {
//         name: city_name,
//         area: {
//             name: area_name,
//             school: {
//                 name: school_name,
//             },
//         },
//     },
// } = address
// console.log(city_name)
// console.log(area_name)
// console.log(school_name)