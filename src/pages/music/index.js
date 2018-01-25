import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import MusicHome from './components/home'
import MusicList from './components/list'
import MusicSearch from './components/search'
import store from '../../store'
import './index.scss'
import imgBg from '../../assets/img/home.png'
import { audioElement,currentMusic,musicList } from '../../store/action';
import {connect} from 'react-dedux'
export default class Music extends Component {
  constructor(props){
    super(props)
    this.state={
        currentMusic:{}
      }
    this.changeMusic=this.changeMusic.bind(this)
  }
  componentWillMount(){
    const list=[
      {
          "id":718477,
          "name":"夜曲",
          "singer":"周杰伦",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M0000024bjiL2aocxT.jpg?max_age=2592000",
          "url":"http://ws.stream.qqmusic.qq.com/718477.m4a?fromtag=46",
          "lyric":""
      },
      {
          "id":1249550,
          "name":"富士山下",
          "singer":"陈奕迅",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
          "url":"http://ws.stream.qqmusic.qq.com/1249550.m4a?fromtag=46",
          "lyric":""
      },
      {
          "id":1249555,
          "name":"粤语残片",
          "singer":"陈奕迅",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
          "url":"http://ws.stream.qqmusic.qq.com/1249555.m4a?fromtag=46",
          "lyric":""
      },
      {
          "id":102320104,
          "name":"迷迭香",
          "singer":"周杰伦",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000002jLGWe16Tf1H.jpg?max_age=2592000",
          "url":"http://ws.stream.qqmusic.qq.com/102320104.m4a?fromtag=46",
          "lyric":""
      }
    ]
    this.setState({
      musicList:list,
      currentMusic:list[0]
    })
    store.dispatch(currentMusic(list[0]))
    store.dispatch(musicList(list))
  }
  componentDidMount(){
    this.setState({
      audio:this.refs.audio
    })
    store.dispatch(audioElement(this.refs.audio))
    store.subscribe(this.changeMusic)
  }
  changeMusic(){
    this.setState({
      currentMusic:store.getState().currentMusic
    })
  }
  render() {
    return (
      <Router>
        <div className='music'>
          <audio src={this.state.currentMusic.url} ref='audio' />
          <div className='music-mask' style={this.state.currentMusic.img?{backgroundImage:`url(${this.state.currentMusic.img})`}:{backgroundImage:`url(${imgBg})`}}></div>
          <ul className='music-title'>
            <li><Link to="/music/">歌曲列表</Link></li>
            <li><Link to="/music/list">热门歌曲</Link></li>
            <li><Link to="/music/search">搜索</Link></li>
          </ul> 
          <Route exact path="/music/" component={MusicHome}/>
          <Route path="/music/list" component={MusicList}/>
          <Route path="/music/search" component={MusicSearch}/>
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (state) => {
  musicList:[
        {
            "id":718477,
            "name":"夜曲",
            "singer":"周杰伦",
            "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M0000024bjiL2aocxT.jpg?max_age=2592000",
            "url":"http://ws.stream.qqmusic.qq.com/718477.m4a?fromtag=46",
            "lyric":""
        },
        {
            "id":1249550,
            "name":"富士山下",
            "singer":"陈奕迅",
            "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
            "url":"http://ws.stream.qqmusic.qq.com/1249550.m4a?fromtag=46",
            "lyric":""
        },
        {
            "id":1249555,
            "name":"粤语残片",
            "singer":"陈奕迅",
            "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
            "url":"http://ws.stream.qqmusic.qq.com/1249555.m4a?fromtag=46",
            "lyric":""
        },
        {
            "id":102320104,
            "name":"迷迭香",
            "singer":"周杰伦",
            "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000002jLGWe16Tf1H.jpg?max_age=2592000",
            "url":"http://ws.stream.qqmusic.qq.com/102320104.m4a?fromtag=46",
            "lyric":""
        }
    ]
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: INCREMENT_COUNTER
      })
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Music)