import React, {Component} from 'react'
import 'whatwg-fetch'
import './index.css'
import custom from '../../assets/js/custom'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[]
    }
  }
  componentWillMount(){
    custom.loading.show()
    fetch('/upload/getInfo')
    .then((res)=>{
      return res.json()
    })
    .then((json)=>{
      this.setState({
        list:json.data
      })
      custom.loading.hide()
    })
    .catch((err)=>{
      custom.loading.hide()
      custom.messages.error('加载失败!')
      console.log(err)
    })
  }
  render() {
    return (
      <div className='home'>     
        <p style={{paddingLeft:'20px',lineHeight:'40px',fontSize:'14px',fontWeight:'bold',color:'#0080f6'}}>cnode社区预览</p>
        <p style={{display: this.state.list === [] || this.state.list.length === 0 ? 'block' : 'none',paddingLeft:'20px'}}>--当前无数据</p>
        <ul className='info_list cnode'>
        {
            this.state.list.map((item,index)=>{
              return (
                <li key={index} className='cell clearfix'>
                  <img src={item.userImg} />
                  <div className='info_detail'>
                    <a href={'https://cnodejs.org'+item.id}>{item.title}</a>
                    <div className='count'>
                      <span>回复数：{item.replyCount}</span>
                      <span>点击数：{item.visitCount}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
