// const http = require("http");
// const fs = require('fs');
// const port = process.env.PORT || 8000;


// const server = http.createServer((req,res)=>{
//     res.statusCode == 200;
//     res.setHeader('Content-Type','text/html')
//     if(req.url == '/'){
//         res.end("<h1>Syed Burhan Uddin</h1>")
//     }
//     if(req.url == '/about'){
//         const data = fs.readFileSync('./file2.txt')
//         res.end(`<h1>welcome to the about page</h1> ${data.toString()}`)
//     }
//     if(req.url == '/web'){
//         const web = fs.readFileSync('index.html')
//         res.end(web.toString())
//     }
//       console.log(req.url) 
// })

// server.listen(port,()=>{
//     console.log(`server is running ${port}`)
// })

for(var i =0; i <3;i++){
    setTimeout(()=>console.log(i))
}