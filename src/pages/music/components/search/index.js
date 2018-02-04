import React, {Component} from 'react'
import 'whatwg-fetch'
export default class musicSearch extends Component{
    constructor(props){
      super(props)
      this.state={
        searchInfo:'',
        searchList: []
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
      fetch('/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=50470255232922928&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w='+this.state.searchInfo+'&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0')
      .then((res)=>{
        return res.json()
      })
      .then((json)=>{
        console.log(json.data.song.list)
        let list=json.data.song.list
        let searchList=[]
        list.forEach(item => {
          searchList.push({
            'id': item.singerid,
            'url': 'http://dl.stream.qqmusic.qq.com/C400000UtEkJ28uy4V.m4a?vkey=BF6012A480EED87DECBDA9C2EAEC5EB9629F45524D58165F7C99DDF5061D232A3D48D2D0997446AB8F32CF3005DF9630E2AE04B6F649D905&guid=7813525631&uin=0&fromtag=66',
            'name': item.title,
            'singer': item.singer[0].name,
            'lyric':''
          })
        })
        this.setState({
          searchList: searchList
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    render(){
        return(
            <div className='music-search'>
              <div>
              <input className='search-info' onChange={(e) => { this.changeSearchInfo(e.target.value) }} placeholder='请输入...' />
                <button className='btn' onClick={this.searchInfo}>搜索</button>
              </div>
              <div className='list'>
              <div style={{ display: this.state.searchList === [] || this.state.searchList.length === 0 ? 'block' : 'none',fontSize:'16px'}}>
                ---当前无搜索结果
              </div>
                <ul>
                  {
                    this.state.searchList.map((item, index) => {
                      return (
                        <li className='item' key={index}><span className='index'>{index + 1}</span> {item.name} -- {item.singer}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
        )
    }
}
