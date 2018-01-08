import './search.scss'
import logo from '../../assets/img/logo.jpg'
import React, {Component} from 'react'
import FA from 'react-fontawesome'
export default class search extends Component{
    constructor(props){
        super(props)
        this.state={
            keyGoods: [{
              value: '影音专场',
              url: '/'
            }, {
              value: '直降2018',
              url: '#'
            }, {
              value:'园林机械',
              url: '#'
            }, {
              value:'斯沃顿',
              url: '#'
            }, {
              value:'领券减千元',
              url: '#'
            }, {
              value:'晾衣架',
              url: '#'
            }, {
              value:'餐桌',
              url: '#'
            }],
            shopNum:0,
          keyHot: [{
              value: '秒杀',
              url: '/'
            }, {
              value: '优惠券',
              url: '#'
            }, {
              value: '闪购',
              url: '#'
            }, {
              value: '拍卖',
              url: '#'
            }, {
              value: '京东服饰',
              url: '/'
            },{
              value: '京东超市',
              url: '/'
            },{
              value: '生鲜',
              url: '#'
            }, {
              value: '全球购',
              url: '#'
            }, {
              value: '京东金融',
              url: '#'
            }]
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
                    <div className='form clearfix'>
                        <input className='input'/>
                        <FA name='camera'/>
                        <button className='search-button'><FA name='search'/></button>
                        <a className='shop-car'>
                            <FA name='shopping-cart' size='2x'/>我的购物车
                            <span className='shop-num'>{this.state.shopNum}</span>
                        </a>
                    </div>
                    <ul className='keyGoods'>
                      {
                        this.state.keyGoods.map((item,index)=>{
                          return (
                            <li key={index}><a href={item.url} className={index === 0 ? 'active' : ''}>{item.value}</a></li>
                          )
                        })
                      }
                    </ul>
                    <ul className='keyHot'>
                      {
                        this.state.keyHot.map((item,index)=>{
                          return (
                            <li key={index} className={index === 3 || index === 7 ? 'divided' : ''}><a href={item.url} className={index ===0? 'active' : ''}>{item.value}</a></li>
                          )
                        })
                      }
                    </ul>
                </div>
            </div>
        )
    }
}
