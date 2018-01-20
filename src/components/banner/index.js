import React, {Component} from 'react'
import FA from 'react-fontawesome'
import './index.scss'
import banner from '../../assets/img/banner.jpg'
export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state={
            bStatus: false
        }
    }
    hideBanner(){
        this.setState({
            bStatus: !this.state.bStatus
        })
    }
  render(){
        return (
            <div className={['top-banner',this.state.bStatus&&'hide'].join(' ')}>
                <div className='container'>
                    <FA name='times' onClick={this.hideBanner.bind(this)} />
                    <img src={banner}/>
                </div>
            </div>
        )
    }
}
