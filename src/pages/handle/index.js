import React, { Component } from 'react'
import 'whatwg-fetch'
import './index.scss'
import avatar from '../../assets/img/user_icon.jpg'
import custom from '../../assets/js/custom'
export default class Handle extends Component {
    constructor(props){
      super(props)
      this.state={
        onlineImg:'https://avatars0.githubusercontent.com/u/17215880?s=460&v=4',
        onlineAvatarImg:'',
        localAvatarImg:''
      }
      this.localUpload=this.localUpload.bind(this)
      this.confirmUpload=this.confirmUpload.bind(this)
    }
    confirmUpload(){
      let data=new URLSearchParams()
      data.append('img',this.state.onlineImg)
      data.append('name',new Date().getTime())
      fetch('/upload/saveOnlineImg',{
        method: 'POST',
        body: data
      })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        this.setState({
          onlineAvatarImg:json.url
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    localUpload(img){
      let data=new FormData()
      data.append('img',img)
      data.append('name',new Date().getTime())
      custom.loading.show()
      fetch('/upload/saveLocalImg',{
        method:'POST',
        body:data
      })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        custom.loading.hide()
        if(json.upload){
          this.setState({
            localAvatarImg:json.url
          })
          custom.messages.success(json.msg)
          return
        }
        custom.messages.error(json.msg)
        console.log(json)
      })
      .catch((err)=>{
        custom.loading.hide()
        custom.messages.error('服务出错!')
        console.log(err)
      })
    }
    render() {
      return (
        <div className='handle'>
          <div>
            <h2>保存网图</h2>          
            <p>图片地址：{this.state.onlineImg}</p>
            <button onClick={this.confirmUpload}>确认上传</button>
            <p>
              <img className='avatarImg' src={this.state.onlineAvatarImg===''?avatar:this.state.onlineAvatarImg} alt='预览' />
            </p>
          </div>
          <div>
            <h2>上传本地图片</h2>
            <input className='upload' type='file' ref='file' accept='image/jpeg,image/x-png,image/gif' onChange={(e)=>{this.localUpload(e.target.files[0])}}/>
            <p>
              <img className='avatarImg' src={this.state.localAvatarImg===''?avatar:this.state.localAvatarImg} alt='预览' />
            </p>
          </div>
        </div>
      )
    }
}
