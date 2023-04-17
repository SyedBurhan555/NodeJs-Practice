const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req,res)=>{
    console.log('server is connect')
    res.statusCode == 200
    res.end('<h1>Syed Burhan Uddin</h1>')
})

server.listen(port,()=>{
    console.log(`server is running ${port}`)
})