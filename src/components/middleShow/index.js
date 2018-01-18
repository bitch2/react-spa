import './index.scss'
import React,{Component} from 'react'
import FA from 'react-fontawesome'
import 'whatwg-fetch'
import msBg from '../../assets/img/seckill_hd.png'
import png1 from '../../assets/img/ms1.png'
import png2 from '../../assets/img/ms2.png'
import png3 from '../../assets/img/ms3.png'
import png4 from '../../assets/img/ms4.png'
import png5 from '../../assets/img/ms5.png'
import png6 from '../../assets/img/ms6.png'
import png7 from '../../assets/img/ms7.png'
import png8 from '../../assets/img/ms8.png'
import jpg9 from '../../assets/img/ms9.jpg'
import jpg10 from '../../assets/img/ms10.jpg'
const msStyle={
  width:'100%',
  height:'55px',
  background:`url(${msBg})`
}
export default class middleShow extends Component{
  constructor(props){
    super(props)
    this.state={
      defaultIndex:0,
      showList:[
                {
                  goods:[
                    {name:'商品1',url:'#g1',pic:png1,oldPrice:300,newPrice:200},{name:'商品2',url:'#g2',pic:png2,oldPrice:320,newPrice:220},{name:'商品3',url:'#g3',pic:png3,oldPrice:330,newPrice:230},{name:'商品4',url:'#g4',pic:png4,oldPrice:340,newPrice:240}
                  ]
                },
                {
                  goods:[
                    {name:'商品5',url:'#g5',pic:png5,oldPrice:500,newPrice:400},{name:'商品6',url:'#g6',pic:png6,oldPrice:520,newPrice:420},{name:'商品7',url:'#g7',pic:png7,oldPrice:530,newPrice:430},{name:'商品8',url:'#g8',pic:png8,oldPrice:540,newPrice:440}
                  ]
                }
               ],
        hour: 24 - new Date().getHours(),
        minute: 60 - new Date().getMinutes(),
        second:60 - new Date().getSeconds()
    }
  }
  toLeft(){
    if(this.state.defaultIndex===0){
      this.refs['list'].className='list'
      this.refs['list'].style.left=-1920+'px'
      setTimeout(()=>{
        this.refs['list'].className='list animition'
        this.setState({
        defaultIndex:1
      })},0)
    }else{
      this.setState((prevState,props)=>({
        defaultIndex:prevState.defaultIndex-1
      }))
    }
  }
  toRight(){
    if(this.state.defaultIndex===this.state.showList.length){
      this.refs['list'].className='list'
      this.refs['list'].style.left=0
      setTimeout(()=>{
        this.refs['list'].className='list animition'
        this.setState({
        defaultIndex:1
      })},0)
    }else{
      this.setState((prevState,props)=>({
        defaultIndex:prevState.defaultIndex+1
      }))
    }
  }
  componentDidMount(){
    this.timing=setInterval(()=>{
      this.setState({
        hour: 24 - new Date().getHours(),
        minute: 60 - new Date().getMinutes(),
        second: 60 - new Date().getSeconds()
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timing)
  }
  render(){
    return (
      <div className='middle-show clearfix'>
          <div className='ms' style={msStyle}>
            <div className='title'><FA name='clock-o' size='2x'/>京东秒杀</div>
            <div className='link'><a href='#'>总有你想不到的低价<FA name = 'chevron-circle-right' /></a></div>
            <div className='time'>距离结束还有<span className='hms'>{this.state.hour<10?'0'+this.state.hour:this.state.hour}</span>:<span className='hms'>{this.state.minute<10?'0'+this.state.minute:this.state.minute}</span>:<span className='hms'>{this.state.second<10?'0'+this.state.second:this.state.second}</span></div>
          </div>
          <div className='show'>
              <div className='box'>
                <ul className='list animition' style={{left:-this.state.defaultIndex*960}} ref='list'>
                  {
                    this.state.showList.map((item,index)=>{
                      return (
                        <li key={index}>
                          {
                            item.goods.map((value,inx)=>{
                              return (
                                <a href={value.url} key={inx}>
                                  <img src={value.pic} />
                                  <p className='name'>{value.name}</p>
                                  <p className='price'><span className='new'>¥{value.newPrice}</span><span className='old'>¥{value.oldPrice}</span></p>
                                </a>
                              )
                            })
                          }
                        </li>
                      )
                    })
                  }
                  <li>
                    {
                      this.state.showList[0].goods.map((value,inx)=>{
                        return (
                          <a href={value.url} key={inx}>
                            <img src={value.pic} />
                            <p className='name'>{value.name}</p>
                            <p className='price'><span className='new'>¥{value.newPrice}</span><span className='old'>¥{value.oldPrice}</span></p>
                          </a>
                        )
                      })
                    }
                  </li>
                </ul>
                <div className='move left' onClick={this.toLeft.bind(this)}><FA name='angle-left' /></div>
                <div className='move right' onClick={this.toRight.bind(this)}><FA name='angle-right' /></div>
              </div>
              <div className='box2'>
                  <div className='item'>
                    <a href="#9"><img src={jpg9} /></a>
                    <a href="#10"><img src={jpg10} /></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

