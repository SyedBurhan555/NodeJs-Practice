const express = require("express");
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
    res.send("<h1>Syed Burhan Ali shah</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>this is about page</h1>")
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})
