import './index.scss'
import React,{Component} from 'react'
export default class middleShow extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <div className='middle-show clearfix'>
          <div className='ms'></div>
          <div className='ms'></div>
          <div className='ms'></div>
      </div>
    )
  }
}

