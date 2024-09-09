let obj = {
    name:'李小龙',
    position:'香港',
    skill:'中国武术',
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// enumerable 为 false 时，表示该属性不会被遍历
Object.defineProperty(obj, 'skill', {
    enumerable:false,
})
console.log(Object.keys(obj))