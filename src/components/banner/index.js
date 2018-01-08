import React, {Component} from 'react'
import {Transition} from 'react-transition-group'
import FA from 'react-fontawesome'
import './index.scss'
import banner from '../../assets/img/banner.jpg'
const defaultStyle = {
    transition: 'opacity 500ms ease-in-out',
    opacity: 0,
    padding: 20,
    display: 'inline-block',
    backgroundColor: '#8787d8'
}
const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
}
export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state={
            bStatus: true
        }
    }
    hideBanner(){
        this.setState({
            bStatus: !this.state.bStatus
        })
    }
    render(){
        if(this.state.bStatus){
            return (
                <div className='top-banner'>
                    <div className='container'>
                        <FA name='times' onClick={this.hideBanner.bind(this)} />
                        <img src={banner}/>
                    </div>
                </div>            
            )
        }else{
            return null
        }
    }
}