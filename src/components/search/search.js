import './search.scss'
import logo from '../../assets/img/logo.jpg'
import React, {Component} from 'react'
import FA from 'react-fontawesome'
export default class search extends Component{
    constructor(props){
        super(props)
        this.state={
            keyGoods:['影音专场','直降2018','园林机械','斯沃顿','领券减千元','晾衣架','餐桌']
        }
    }
    render(){
        return(
            <div className='search'>
                <div className='logo'>
                    <a href='/'>
                        <img src={logo} />
                    </a>
                </div>
                <div className='search-part'>
                    <div className='form'>
                        <input className='input'/>
                        <FA name='camera'/>
                        <button className='search-button'><FA name='search'/></button>
                        <a className='shop-car'>
                            <FA name='shopping-cart' size='2x'/>购物车
                        </a>
                    </div>
                    <ul className='keyGoods'>
                       <li><a href='#'>{this.state.keyGoods}</a></li>
                    </ul>
                    <div className='link'></div>
                </div>
            </div>
        )
    }
}