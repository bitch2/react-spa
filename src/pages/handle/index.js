import React, { Component } from 'react'
import 'whatwg-fetch'
import './index.scss'
export default class Handle extends Component {
    constructor(props){
      super(props)
      this.state={
        url:'/upload/saveImg'
      }
      this.upload=this.upload.bind(this)
      this.confirmUpload=this.confirmUpload.bind(this)
    }
    upload(img){
      console.log(this.refs.file.files[0])
      console.log(img)
      this.setState({
        img:img
      })
      fetch('/upload/getInfo')
      .then((res)=>{
        console.log(res)
        return res.json()
      })
      .then((json)=>{
        console.log(json)
      })
    }
    confirmUpload(){
      let formData=new FormData()
      formData.append('img','https://avatars1.githubusercontent.com/u/227713?v=3&s=120')
      formData.append('name','abc')
      fetch(this.state.url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'Hubot',
            login: 'hubot',
          })
        })
      .then((res)=>{
        console.log(res)
        return res.text()
      })
      .then((json)=>{
        console.log(json)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    render() {
      return (
        <div className='handle'>
          <input className='upload' type='file' ref='file' accept='image/jpeg,image/x-png,image/gif' onChange={(e)=>{this.upload(e.target.files[0])}}/>
          <button onClick={this.confirmUpload}>确认上传</button>
        </div>
      )
    }
}
