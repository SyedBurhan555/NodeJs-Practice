const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const app = express();
const port = 8000;


// app.use(express.static(path.join(__dirname,'views')))
app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars');

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})