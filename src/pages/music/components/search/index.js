import React, {Component} from 'react'
import 'whatwg-fetch'
export default class musicSearch extends Component{
    constructor(props){
      super(props)
      this.state={
        searchInfo:'',
        musicList:[]
      }
      this.changeSearchInfo = this.changeSearchInfo.bind(this)
      this.searchInfo = this.searchInfo.bind(this)
    }
    changeSearchInfo(val){
      this.setState({
        searchInfo:val
      })
    }
    searchInfo(){
      let data=new URLSearchParams()
      data.append('s',this.state.searchInfo)
      fetch('/fcgi-bin/music_search_new_platform?t=0&n=%s&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w='+this.state.searchInfo)
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        console.log(json.data.song.list)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    render(){
        return(
            <div className='music-search'>
              <div className='search'>
                <input className='search-info' onChange={(e)=>{this.changeSearchInfo(e.target.value)}} />
                <button className='btn' onClick={this.searchInfo}>搜索</button>
              </div>
            </div>
        )
    }
}
