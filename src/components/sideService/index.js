import './index.scss'
import React, {Component} from 'react'
import FA from 'react-fontawesome'
import icon from '../../assets/img/user_icon.jpg'
export default class sideService extends Component{
    constructor(props){
        super(props)
        this.state={
            defaultIndex:0,
            bulletins:[
                        {ary:[{value:'图书勋章日满300减150',url:'#1'},{value:'京东健康超级品类日低至5折',url:'#'},{value:'每日享折扣 京东品质游',url:'#'},{value:'新年狂欢购，满199减120',url:'#'}]},
                        {ary:[{value:'京东启用全新客服电话“950618”',url:'#2'},{value:'大家电订单超期自动取消公告',url:'#'},{value:'关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告',url:'#'},{value:'京东物流推出配送员统一外呼电话"95056”',url:'#'}]}
                      ],
            orders:[
                {
                    order:[
                            {icon:'jpy',name:'话费',url:'#hf'},
                            {icon:'plane',name:'机票',url:'#jp'},
                            {icon:'h-square',name:'酒店',url:'#jd'},
                            {icon:'gamepad',name:'游戏',url:'#yx'}
                        ]
                },
                {
                    order:[
                            {icon:'building',name:'企业购',url:'#hf'},
                            {icon:'tint',name:'加油卡',url:'#jp'},
                            {icon:'film',name:'电影票',url:'#jd'},
                            {icon:'train',name:'火车票',url:'#yx'}
                          ]
                },
                {
                    order:[
                            {icon:'users',name:'众筹',url:'#hf'},
                            {icon:'usd',name:'理财',url:'#jp'},
                            {icon:'credit-card-alt',name:'礼品卡',url:'#jd'},
                            {icon:'file-text-o',name:'白条',url:'#yx'}
                          ]
                }
            ],
            orderIndex:null          
        }
        this.changeTab=this.changeTab.bind(this)
        this.focusOrder=this.focusOrder.bind(this)
        this.unfocusOrder=this.unfocusOrder.bind(this)
    }
    changeTab(event,index){
        this.setState({
            defaultIndex:index
        })
    }
    focusOrder(event,inx,index){
        if(inx===0){
            this.setState({
                orderIndex:index
            })
        }
    }
    unfocusOrder(event){
        this.setState({
            orderIndex:null
        })
    }
    render(){
        return(
            <div className='side-service'>
                <div className='user'>
                    <div className='icon'>
                        <img src={icon} />
                    </div>
                    <div className='info'>
                        <p>Hi,欢迎来到京东</p>
                        <p><a href='#'>登录</a><a href='#'>注册</a></p>
                    </div>
                    <div className='member'>
                        <a href='#'>新人福利</a><a href='#'>PLUS会员</a>
                    </div>
                </div>
                <div className='bulletin'>
                    <div className='tab'>
                        <a href='javascript:void(0)' className={this.state.defaultIndex===0?'active':''} onMouseEnter={(event)=>{this.changeTab(event,0)}}>促销</a><a href='javascript:void(0)' className={this.state.defaultIndex===1?'active':''} onMouseEnter={(event)=>{this.changeTab(event,1)}}>公告</a>
                        <a href='#' className='link'>更多</a>
                        <i className='tab-line' style={{left:this.state.defaultIndex*34+'px'}}></i>
                    </div>
                    <div className='info'>
                        {
                            this.state.bulletins.map((item,index)=>{
                                return (
                                    <ul key={index} className={this.state.defaultIndex===index?'active':''}>
                                        {
                                            item.ary.map((val,inx)=>{
                                                return(
                                                    <li key={inx}><a href={val.url}>{val.value}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='order' onMouseLeave={this.unfocusOrder}>
                    {
                    this.state.orders.map((val,inx)=>{
                        return(
                            <ul key={inx} className={inx===0&&this.state.orderIndex!=null?'focus':''}>
                                {
                                    val.order.map((item,index)=>{
                                        return(
                                            <li key={index}><a href={item.url} className={inx===0&&this.state.orderIndex===index?'focus':''} onMouseEnter={(event)=>{this.focusOrder(event,inx,index)}}><FA name={item.icon}/>{item.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                    }
                    <div className='detail'>
                        <div className={this.state.orderIndex===0?'item active':'item'}>话费</div>
                        <div className={this.state.orderIndex===1?'item active':'item'}>机票</div>
                        <div className={this.state.orderIndex===2?'item active':'item'}>酒店</div>
                        <div className={this.state.orderIndex===3?'item active':'item'}>游戏</div>
                    </div>
                </div>
            </div>
        )
    }
}