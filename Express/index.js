const express = require("express");
const fs = require('fs');
const path = require('path')
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname,'public')))

app.get('/hello/:name',(req,res)=>{
    res.send("<h1>Syed Burhan Ali shah</h1>" + req.params.name)
})
app.get('/about',(req,res)=>{
    res.send("<h1>this is about page</h1>")
})
app.get('/website',(req,res)=>{
    // const web = fs.readFileSync('../index.html')
    // res.send(web.toString())
    // res.sendFile(path.join(__dirname,'../index.html'))
    res.json({'burhan':"ali"})
})
app.get('',(req,res)=>{
    res.send("sorry 404 page not found")
})
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})
