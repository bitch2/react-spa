import './index.scss'
import React, {Component} from 'react'
export default class mainMenu extends Component{
  constructor(props){
    super(props)
    this.state={
      goodsList:[
        {goods:[{value:'家用电器',url:'#'}]},
        { goods: [{ value: '手机', url: '#sj' }, { value: '运营商', url: '#' }, { value: '数码', url: '#' }] },
        { goods: [{ value: '电脑', url: '#' }, { value: '办公', url: '#' }] },
        { goods: [{ value: '家具', url: '#jz' }, { value: '家具', url: '#' }, { value: '家装', url: '#' }, { value: '厨具', url: '#' }] },
        { goods: [{ value: '男装', url: '#' }, { value: '女装', url: '#' }, { value: '童装', url: '#' }, { value: '内衣', url: '#' }] },
        { goods: [{ value: '美妆个护', url: '#' }, { value: '宠物', url: '#' }] },
        { goods: [{ value: '女鞋', url: '#' }, { value: '箱包', url: '#' }, { value: '钟表', url: '#' }, { value: '珠宝', url: '#' }] },
        { goods: [{ value: '男鞋', url: '#' }, { value: '运动', url: '#' }, { value: '户外', url: '#' }] },
        { goods: [{ value: '房产', url: '#' }, { value: '汽车', url: '#' }, { value: '汽车用品', url: '#' }] },
        { goods: [{ value: '母婴', url: '#' }, { value: '玩具乐器', url: '#' }] },
        { goods: [{ value: '食品', url: '#' }, { value: '酒类', url: '#' }, { value: '生鲜', url: '#' }, { value: '特产', url: '#' }] },
        { goods: [{ value: '艺术', url: '#' }, { value: '礼品鲜花', url: '#' }, { value: '农资绿植', url: '#' }] },
        { goods: [{ value: '医疗保健', url: '#' }, { value: '计生用品', url: '#' }] },
        { goods: [{ value: '图像', url: '#' }, { value: '音像', url: '#' }, { value: '电子书', url: '#' }] },
        { goods: [{ value: '机票', url: '#' }, { value: '酒店', url: '#' }, { value: '旅游', url: '#' }, { value: '生活', url: '#' }] },
        { goods: [{ value: '理财', url: '#lc' }, { value: '众筹', url: '#' }, { value: '白条', url: '#' }, { value: '保险', url: '#' }] }
      ]
    }
  }
  render(){
    return (
      <div className='mainNav'>
        <ul>
          {
            this.state.goodsList.map((item,index)=>{
              return (
              <li key={index}>
                {
                  item.goods.map((item2,index2)=>{
                    return <a key={index2} href={item2.url}>{item2.value}</a>
                  })
                }
              </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
