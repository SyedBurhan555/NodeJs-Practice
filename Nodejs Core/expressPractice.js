const express = require("express");
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
    res.setHeader = 200;
    res.send("<h1>Syed Burhan Ali shah</h1>")
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})
