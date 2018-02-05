const express = require('express')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const http=require('superagent')
const cheerio=require('cheerio')
const path=require('path')
const fs = require('fs')
const app = express()
const port = 8080
app.use(bodyParser.urlencoded({extended:false}))
app.use('/img',express.static(__dirname+'/img'))
app.get('/',(req,res)=>{
    res.send('server listen on localhost:8080')
})
app.get('/upload/getInfo',(req,res,next)=>{
    http.get('https://cnodejs.org/')
    .end((err,data)=>{
        if(err){
            return next(err)
        }
        let cnodeList=[]
        let $=cheerio.load(data.text)
        let cells=$('#topic_list .cell')
        cells.each((index,item)=>{
            let $item=$(item)
            cnodeList.push({
                title:$item.find('.topic_title').text(),
                id:$item.find('.topic_title').attr('href'),
                userImg: $item.find('.user_avatar img').attr('src'),
                replyCount:$item.find('.count_of_replies').text(),
                visitCount:$item.find('.count_of_visits').text(),               
            })
        })
        res.send({data:cnodeList,state:true})
    })
})
app.post('/upload/saveOnlineImg',(req,res,next)=>{
    // 图片地址类
    let data=req.body
    if(!fs.existsSync(__dirname+ '/img')){
        fs.mkdirSync(__dirname+'/img')
    }
    http.get(req.body.img)
    .set({'async':false})
    .end((err,msg)=>{
        if(err){
            return next(err)
        }
        msg.setEncoding('binary')
        fs.writeFile(__dirname+'/img/'+data.name+'.png',msg.body,'binary',(err)=>{
            if(err){
                res.send({'upload':false,'msg':'上传失败！'})
            }
            res.send({'upload':true,'msg':'上传成功!','url':'http://localhost:8080/img/'+data.name+'.png'})
        })
    })
})
app.post('/upload/saveLocalImg',(req,res,next)=>{
    // 上传图片类
    if(!fs.existsSync(__dirname+ '/img')){
        fs.mkdirSync(__dirname+'/img')
    }
    let form=new formidable.IncomingForm()
    form.encoding='utf-8'
    form.keepExtensions=true
    form.uploadDir = __dirname+'/img'
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.send({'upload':false,'msg':'上传失败!'})
            return next(err)
        }
        let imgPath=files.img.path
        let imgName=fields.name
        let imgData=fs.readFileSync(imgPath)
        fs.writeFile(imgPath,imgData,(err)=>{
            if(err){
                res.send({'upload':false,'msg':'上传失败!'})
            }
            res.send({'upload':true,'msg':'上传成功!','url':'http://localhost:8080/img/'+ path.basename(imgPath)})
        })
    })
})
app.listen(port,(err)=>{
    if(err){
        return err
    }
    console.log("server listen on port:"+port)
})
