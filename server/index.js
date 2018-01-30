const express = require('express')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const http=require('superagent')
const fs = require('fs')
const app = express()
const port = 8080
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send('server listen on localhost:8080')
})
app.get('/upload/getInfo',(req,res,next)=>{
    res.send({'name':'admin','age':20})
})
app.post('/upload/saveImg',(req,res,next)=>{
    // var form=new formidable.IncomingForm()
    // form.encoding='utf-8'
    res.set({'Content-type':'application/json'})
    var data=req.body
    console.log(data)
    if(!fs.existsSync(__dirname+ '/img')){
        fs.mkdirSync(__dirname+'/img')
    }
    // form.parse(req,(err,fields,files)=>{
    //     console.log(files.the_file)       
    // })
    http.get(req.body.img)
    .set({'async':false})
    .end((err,msg)=>{
        if(err){
            return next(err)
        }
        msg.setEncoding('binary')
        fs.writeFile(__dirname+'/img/'+req.body.name+'.png',rec.body,'binary',()=>{
        })
    })
    res.send({'upload':true,'url':'http://localhost:8008/img'+req.body.name+'.png'})
})
app.listen(port,(err)=>{
    if(err){
        return err
    }
    console.log("server listen on port:"+port)
})