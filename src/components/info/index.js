import './index.scss'
import React, {Component} from 'react'
import FA from 'react-fontawesome'
export default class info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='info-nav'>
                <div className='container'>
                    <span className='location'>
                        <FA name='map-marker'/>北京 
                    </span>
                    <ul>
                        <li><a href='#'>登录</a></li>
                        <li><a href='#'>我的订单</a></li>
                        <li><a href='#'>我的京东<FA name='angle-down'/></a></li>
                        <li><a href='#'>京东会员</a></li>
                        <li><a href='#'>企业采购</a></li>
                        <li><a href='#'>客户服务<FA name='angle-down'/></a></li>
                        <li><a href='#'>网站导航<FA name='angle-down'/></a></li>
                        <li><a href='#'>手机京东</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}