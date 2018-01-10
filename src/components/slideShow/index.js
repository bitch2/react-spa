import './index.scss'
import React,{Component} from 'react'
import img1 from '../../assets/img/slide1.jpg'
import img2 from '../../assets/img/slide2.jpg'
import img3 from '../../assets/img/slide3.jpg'
import img4 from '../../assets/img/slide4.jpg'
import img5 from '../../assets/img/slide5.jpg'
import img6 from '../../assets/img/slide6.jpg'
import img7 from '../../assets/img/slide7.jpg'
import img8 from '../../assets/img/slide8.jpg'
import adv1 from '../../assets/img/adv1.jpg'
import adv2 from '../../assets/img/adv2.jpg'
export default class slideShow extends Component{
    constructor(props){
        super(props)
        this.changeImg=this.changeImg.bind(this)
        this.stopPlay=this.stopPlay.bind(this)
        this.autoPlay=this.autoPlay.bind(this)
        this.state={
            defaultIndex:0,
            imgs:[
                  {img:img1,url:'#1'},
                  {img:img2,url:'#1'},
                  {img:img3,url:'#1'},
                  {img:img4,url:'#1'},
                  {img:img5,url:'#1'},
                  {img:img6,url:'#1'},
                  {img:img7,url:'#1'},
                  {img:img8,url:'#8'}
                ],
            advs:[
                {img:adv1,url:'#a1'},
                {img:adv2,url:'#a2'}
            ],
            showTiming:null
        }
    }
    componentDidMount(){
        this.autoPlay() 
    }
    componentWillUnmount() {
        clearInterval(this.state.showTiming)
    }
    changeImg(event,index) {
        this.setState({
            defaultIndex:index
        })
    }
    stopPlay(){
        clearInterval(this.state.showTiming)
    } 
    autoPlay(){
        this.state.showTiming=setInterval(()=>{
            if(this.state.defaultIndex===this.state.imgs.length-1){
                this.setState({
                    defaultIndex:0
                })
            }else{
                this.setState((prevState, props)=>({                   
                    defaultIndex:++prevState.defaultIndex
                }))
            }          
        },2000) 
    }
    render(){
        return(
            <div className='slide-show clearfix' onMouseEnter={this.stopPlay} onMouseLeave={this.autoPlay}>
                <ul className='slides'>
                    {
                        this.state.imgs.map((item,index)=>{
                            return (
                                <li key={index} className={this.state.defaultIndex===index?'active':''}>
                                    <a href={item.url}><img src={item.img} /></a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='slides-point'>
                    {
                        this.state.imgs.map((item,index)=>{
                            return (
                                <li key={index} className={this.state.defaultIndex===index?'active':''} onMouseEnter={(event)=>{this.changeImg(event,index)}}></li>
                            )
                        })
                    }
                </ul>
                <div className='adv-img'>
                    {
                        this.state.advs.map((item,index)=>{
                            return (
                                <a key={index} href={item.url}>
                                    <img src={item.img} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}