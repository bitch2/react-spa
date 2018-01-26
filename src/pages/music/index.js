import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import FA from 'react-fontawesome'
import MusicHome from './components/home'
import MusicList from './components/list'
import MusicSearch from './components/search'
import store from '../../store'
import './index.scss'
import imgBg from '../../assets/img/home.png'
import { audioElement,currentMusic,musicList,audioPlay,audioPause} from '../../store/action';
import {connect} from 'react-redux'
class Music extends Component {
  constructor(props){
    super(props)
    this.changeAudioStatus=this.changeAudioStatus.bind(this)
  }
  componentWillMount(){
    const list=[
      {
          "id":718477,
          "name":"夜曲",
          "singer":"周杰伦",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M0000024bjiL2aocxT.jpg?max_age=2592000",
        "url":"http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0,%E8%94%A1%E5%8D%93%E5%A6%8D%20-%20%E5%B0%8F%E9%85%92%E7%AA%9D.mp3",
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
    this.props.setCurrentMusic(list[0])
    this.props.setMusicList(list)
  }
  changeAudioStatus(){
    if(this.props.audioStatus){
      this.props.audioElement.pause()
      this.props.closeAudioStatus()
    }else{
      this.props.audioElement.play()
      this.props.openAudioStatus()
    }
  }
  componentDidMount(){
    this.props.setAudioElement(this.refs.audio)
  }
  render() {
    return (
      <Router>
        <div className='music'>
          <audio src={this.props.currentMusic.url} ref='audio' />
          <div className='music-mask' style={this.props.currentMusic.img ? { backgroundImage: `url(${this.props.currentMusic.img})`}:{backgroundImage:`url(${imgBg})`}}></div>
          <ul className='music-title'>
            <li><Link to="/music/">歌曲列表</Link></li>
            <li><Link to="/music/list">热门歌曲</Link></li>
            <li><Link to="/music/search">搜索</Link></li>
          </ul>
          <Route exact path="/music/" component={MusicHome}/>
          <Route path="/music/list" component={MusicList}/>
          <Route path="/music/search" component={MusicSearch}/>
          <div className='show-info'>
            <div className='music-img'>
                <img src={this.props.currentMusic.img} />
            </div>
            <div className='music-lyric'>
            </div>
          </div>
          <div className='control-bar'>
            <FA name='step-backward' size='2x'/>
            <FA name={this.props.audioStatus===true?'pause':'play'} size='3x' onClick={this.changeAudioStatus}/>
            <FA name='step-forward' size='2x'/>         
          </div>
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      audioElement: state.audioElement,
      currentMusic: state.currentMusic,
      audioStatus: state.audioStatus
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentMusic: item => dispatch(currentMusic(item)),
    setMusicList: list => dispatch(musicList(list)),
    setAudioElement: el => dispatch(audioElement(el)),
    openAudioStatus: () => dispatch(audioPlay()),
    closeAudioStatus: () => dispatch(audioPause())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music)
