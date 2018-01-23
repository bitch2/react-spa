import React, {Component} from 'react'
import FA from 'react-fontawesome'
export default class musicHome extends Component{
    constructor(props){
        super(props)
        this.state={
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
      this.playMusic=this.playMusic.bind(this)
    }
    componentDidMount(){
      this.setState({
        audio:this.refs.audio
      })
      console.log(this)
    }
    playMusic(e,item){
      this.state.audio.play()
    }
    render(){
        return(
            <div className='music-home'>
                <div className='music-home-title'>
                  <span className='song'>歌曲</span>
                  <span className='singer'>歌手</span>
                  <span className='time'>时长</span>
                </div>
                <ul className='music-home-list'>
                    {
                      this.state.musicList.map((item,index)=>{
                        return(
                          <li key={index}>
                            <span className='song'>{item.name}</span>
                            <span className='singer'>{item.singer}</span>
                            <span className='time'></span>
                            <FA name='play-circle-o' onClick={(e)=>{this.playMusic(e,item)}} />
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
        )
    }
}
