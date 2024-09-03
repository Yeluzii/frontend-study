const fs = require('fs')

// 异步操作
fs.readFile('D:/前端学习/frontend-study/NodeJS/内置模块/test.txt',
    'utf-8',
    (err, data) => {
        console.log('文件内容是：', data)
    }
)

// 同步写入文件
// try {
//     let content = '新的文件内容'
//     fs.writeFileSync(
//         'D:/前端学习/frontend-study/NodeJS/内置模块/test.txt',
//         content
//     )
// } catch (err) {
//     console.error(err)
// }

// try {
//     let status = fs.statSync('D:/前端学习/frontend-study/NodeJS/内置模块/test.txt')
//     console.log(status.isFile)
//     console.log(status.isDirectory)
//     console.log(status.size)
// } catch (err) {
//     console.log(err)
// }