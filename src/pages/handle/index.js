import React, { Component } from 'react'
import 'whatwg-fetch'
import './index.scss'
import avatar from '../../assets/img/user_icon.jpg'
import custom from '../../assets/js/custom'
import FA from 'react-fontawesome'
export default class Handle extends Component {
    constructor(props){
      super(props)
      this.state={
        onlineImg:'https://avatars0.githubusercontent.com/u/17215880?s=460&v=4',
        onlineAvatarImg:'',
        localAvatarImg:'',
        previewImg:'',
        modalState:false
      }
      this.handleWaiting=this.handleWaiting.bind(this)
      this.handleLoading=this.handleLoading.bind(this)
      this.msgRemind=this.msgRemind.bind(this)
      this.localUpload=this.localUpload.bind(this)
      this.confirmUpload=this.confirmUpload.bind(this)
      this.previewImg=this.previewImg.bind(this)
      this.closePreview=this.closePreview.bind(this)
    }
    msgRemind(){
      custom.messages.normal()
      custom.messages.error()
      custom.messages.success()
      custom.messages.warning()
    }
    handleWaiting(){
      custom.waiting.show()
      custom.messages.warning('2s 后关闭')
      setTimeout(()=>{
        custom.waiting.hide()
      },2000)    
    }
    handleLoading(){
      custom.loading.show()
      custom.messages.warning('2s 后关闭')
      setTimeout(()=>{
        custom.loading.hide()
      },2000)
    }
    confirmUpload(){
      let data=new URLSearchParams()
      data.append('img',this.state.onlineImg)
      data.append('name',new Date().getTime())
      custom.loading.show()
      fetch('/upload/saveOnlineImg',{
        method: 'POST',
        body: data
      })
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        custom.loading.hide()
        if(json.upload){
          this.setState({
            onlineAvatarImg:json.url
          })
          custom.messages.success(json.msg)
          return
        }
        custom.messages.error(json.msg)
      })
      .catch((err)=>{
        custom.loading.hide()
        custom.messages.error('服务出错！')
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
      })
      .catch((err)=>{
        custom.loading.hide()
        custom.messages.error('服务出错！')
        console.log(err)
      })
    }
    previewImg(img){
      if(img===''){
        custom.messages.warning('请先上传图片！')
        return
      }
      this.setState({
        modalState:true,
        previewImg:img
      })
    }
    closePreview(){
      this.setState({
        modalState:false
      })
    }
    render() {
      return (
        <div className='handle'>
          <div className='handle-item'>
            <h2>操作样式</h2>          
            <button className='btn' onClick={this.msgRemind} style={{marginRight:'20px'}}>信息提示</button>
            <button className='btn custom-btn-success'  style={{marginRight:'20px'}}>按钮</button>
            <button className='btn custom-btn-error' style={{marginRight:'20px'}}>按钮</button>
            <button className='btn custom-btn-warning'  style={{marginRight:'20px'}}>按钮</button>
            <button className='btn' onClick={this.handleWaiting} style={{marginRight:'20px'}}>loading1</button>
            <button className='btn' onClick={this.handleLoading}>loading2</button>
          </div>
          <div className='handle-item'>
            <h2>保存网图</h2>          
            <p>图片地址：{this.state.onlineImg}</p>
            <button className='btn btn-primary' onClick={this.confirmUpload}>确认上传</button>
            <div className='img-preview'>
              <img className='avatarImg' onClick={(e)=>{this.previewImg(this.state.onlineAvatarImg)}} src={this.state.onlineAvatarImg===''?avatar:this.state.onlineAvatarImg} alt='预览' />
            </div>
          </div>
          <div className='handle-item'>
            <h2>上传本地图片</h2>
            <div className='upload-box'>
              <button className='btn btn-primary'>选择文件</button>
              <input className='upload-btn' type='file' ref='file' accept='image/jpeg,image/x-png,image/gif' onChange={(e)=>{this.localUpload(e.target.files[0])}}/>
            </div>
            <div className='img-preview'>
              <img className='avatarImg' onClick={(e)=>{this.previewImg(this.state.localAvatarImg)}} src={this.state.localAvatarImg===''?avatar:this.state.localAvatarImg} alt='预览' />
            </div>
          </div>
          <div className={this.state.modalState?'modal-preview show':'modal-preview'}>
            <img src={this.state.previewImg} />
            <FA name='times-circle' onClick={this.closePreview} />
          </div>
        </div>
      )
    }
}
