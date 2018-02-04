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
          "url":"http://dl.stream.qqmusic.qq.com/C400001zMQr71F1Qo8.m4a?vkey=FDE2A29F3B15E46E0D534409137075F5ACD37F274B06D254775F117A9137714B7A816B4372FB925F91A0E4B4EA605AD737022C8EE2E17338&guid=7813525631&uin=0&fromtag=66",
          "lyric":""
      },
      {
          "id":1249550,
          "name":"富士山下",
          "singer":"陈奕迅",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
          "url":"http://dl.stream.qqmusic.qq.com/C400003dtkNk26WhJD.m4a?vkey=E0D5EEE1C18EFA696384E90A293462B3DE56AB7F41665CE64BC9CA1C2A423C3E1B50290EB776019789093988DE9523A99D960932F1682950&guid=7813525631&uin=0&fromtag=66",

          "lyric":""
      },
      {
          "id":1249555,
          "name":"粤语残片",
          "singer":"陈奕迅",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000003nMzes28P7wv.jpg?max_age=2592000",
          "url":"http://dl.stream.qqmusic.qq.com/C400000J9BOC3sAUqd.m4a?vkey=DAA7F7ED0DC5626C6B873CA4153AC10F1AD82E639C4DBEA2C166CEE3CA469E1A8513509128964022D1C8BDCE3C460843B122711ACB41733E&guid=7813525631&uin=0&fromtag=66",
          "lyric":""
      },
      {
          "id":102320104,
          "name":"迷迭香",
          "singer":"周杰伦",
          "img":"https://y.gtimg.cn/music/photo_new/T002R150x150M000002jLGWe16Tf1H.jpg?max_age=2592000",
          "url":"http://dl.stream.qqmusic.qq.com/C4000016oRIN0hu5zE.m4a?vkey=8BB8EABF85290C1D13E30F984BEC36AC9DE33B519EF6EB87DF3ABE958F0EAAB768CCF9564CE54F17371F216309BC571A9E340D384FD442DE&guid=7813525631&uin=0&fromtag=66",
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
            <li><Link to="/music/search">其他</Link></li>
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
            <span className='song-info'>{this.props.currentMusic.name}--{this.props.currentMusic.singer}</span>
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
