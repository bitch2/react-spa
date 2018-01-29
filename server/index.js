const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('server listen on localhost:8080')
})
app.listen(port,(err)=>{
    if(err){
        return err
    }
    console.log("server listen on port:"+port)
})