// 浅拷贝，会影响原来的值

// let a = { name: '前端' }
// let b = a
// b.name = '后端'
// console.log(b)
// console.log(a)

// 使用扩展运算符，也是一种浅拷贝
// var a = { name: '前端' }
// var b = { ...a }

// 对象合并（浅拷贝），将多个对象的可枚属性（ enumerable 为 true ）合并到新对象中
// var obj = {}
// var obj2 = {b:2}
// var obj3 = {c:3}
// Object.assign(obj, obj2, obj3)
// console.log(obj)

// 深拷贝
let obj1 = {
    name: '电影',
    category: {
        cartoon: '动漫',
        kunfu: '武侠',
        love: '爱情',
    },
    platform: ['腾讯视频', '爱奇艺', '优酷'],
}

// 对象的序列化和反序列化
let obj2 = JSON.parse(JSON.stringify(obj1)) // 先将对象序列化为字符串，再将字符串反序列化为对象
obj2.category.kunfu = '修仙'
obj2.platform[2] = '哔哩哔哩'
console.log(obj1.category.kunfu, obj1.platform[2])
console.log(obj2.category.kunfu, obj2.platform[2])