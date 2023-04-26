const express = require('express')
const router = express.Router();
const fs = require('fs');
const path =  require('path');
const blogs = require('../data/blogs.js')
// console.log(blogs.map((e)=>e.slugs))


router.get('/',(req,res)=>{
    res.send('<h1>Syed burhan uddibn</h1>')
})
router.get('/about',(req,res)=>{
    res.send('<h1>this is about page</h1>')
})

router.get('/blog/:slugs',(req,res)=>{
    // blogs.forEach(e=>{
    //     // res.send(e.title)
    //     console.log(e)
    // })
    // res.send('<h1>this is about page</h1>')
   myBlogs = blogs.filter((e)=>{
    return e.slugs === req.params.slugs
   })
   console.log(myBlogs)
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

module.exports = router;