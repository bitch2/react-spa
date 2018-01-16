import './index.scss'
import React,{Component} from 'react'
import FA from 'react-fontawesome'
import msBg from '../../assets/img/seckill_hd.png'
const msStyle={
  width:'100%',
  height:'55px',
  background:`url(${msBg})`
}
export default class middleShow extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <div className='middle-show clearfix'>
          <div className='ms' style={msStyle}>
            <div className='title'><FA name='clock-o' size='2x'/>京东秒杀</div>
            <div className='link'><a href='#'>总有你想不到的低价<FA name = 'chevron-circle-right' /></a></div>
          </div>
          <div className='show'>
              <div className=''>
              </div>
          </div>
      </div>
    )
  }
}

