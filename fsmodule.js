const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err,data)
// })
// const a = fs.readFileSync('file.txt','utf-8')
// console.log(a)

// fs.writeFile('file2.txt','hello node js',(err,data)=>{
//     console.log(err,data)
// })
fs.writeFileSync('file2.txt','hello to nodejs 2',(err,data)=>{
    console.log(data)
})

console.log('finished first')