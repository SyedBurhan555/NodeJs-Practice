const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


app.use(express.static(path.join(__dirname,'templates')))

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})