import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Banner from './components/banner'
import InfoNav from './components/info'
import Search from './components/search/search'
import MainMenu from './components/mainMenu'
import SlideShow from './components/slideShow'
import SideService from './components/sideService'
import MidddleShow from './components/middleShow'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import  'font-awesome/css/font-awesome.css'
import './assets/css/reset.css'
import './assets/css/main.scss'
import './assets/css/custom.css'
import Home from './pages/home'
import Music from './pages/music'
import Movie from './pages/movie'
import Handle from './pages/handle'
import { Provider } from 'react-redux'
import store from './store'
const Demo = () => {
  return(
    <div className='demo'>
      <p style={{paddingLeft:'20px',lineHeight:'40px',fontSize:'14px',fontWeight:'bold',color:'#0080f6',background:'#fff'}}>react渲染静态页面实验</p>
      <Banner />
      <InfoNav />
      <div className='container'>
        <Search />
        <div className='clearfix'>
          <MainMenu />
          <SlideShow />
          <SideService />
        </div>
        <MidddleShow />
      </div>
    </div>
  )
}
class Routers extends Component{
  constructor(props){
    super(props)
    this.state={
      defaultActive:1,
      hash:''
    }
    this.changeRouter=this.changeRouter.bind(this)
  }
  componentWillMount(){
    let hash=window.location.hash
    this.setState({
      hash:hash
    })
  }
  changeRouter(){
    let hash=window.location.hash
    if(hash==='#/'){
      this.setState({
        hash:'#/'
      })
    }else{
      this.setState({
        hash:hash
      })
    }
  }
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className='out-container'>
            <ul className='out-routers clearfix'>
              <li className={this.state.hash==='#/'?'router-active' : ''} onClick={this.changeRouter}><Link to="/">首页</Link></li>
              <li className={this.state.hash.indexOf('music') !== -1 ? 'router-active' : ''} onClick={this.changeRouter}><Link to="/music">音乐</Link></li>
              <li className={this.state.hash.indexOf('movie') !== -1 ? 'router-active' : ''} onClick={this.changeRouter}><Link to="/movie">电影</Link></li>
              <li className={this.state.hash.indexOf('handle') !== -1 ? 'router-active' : ''} onClick={this.changeRouter}><Link to="/handle">操作</Link></li>
              <li className={this.state.hash.indexOf('demo') !== -1 ? 'router-active' : ''} onClick={this.changeRouter}><Link to="/demo">例子</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/movie" component={Movie} />
            <Route path="/handle" component={Handle} />
            <Route path="/demo" component={Demo} />
          </div>
        </Router>
      </Provider>
    )
  }
}
const ReactApp = () => {
  return (
    <Routers />
  )
}
ReactDom.render(
(
    <ReactApp />
),
document.getElementById('app'))
