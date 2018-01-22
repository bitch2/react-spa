import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Banner from './components/banner/index'
import InfoNav from './components/info/index'
import Search from './components/search/search'
import MainMenu from './components/mainMenu/index'
import SlideShow from './components/slideShow/index'
import SideService from './components/sideService/index'
import MidddleShow from './components/middleShow/index'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import  'font-awesome/css/font-awesome.css'
import './assets/css/reset.css'
import './assets/css/main.scss'
import Music from './pages/music'
import Movie from './pages/movie'
import Handle from './pages/handle'
import Others from './pages/others'
const Home = () => {
  return(
    <div className='home'>
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
class ReactApp extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
        <Routers />
    )
  }
}
class Routers extends Component{
  constructor(props){
    super(props)
    this.state={
      defaultActive:1
    }
    this.changeRouter=this.changeRouter.bind(this)
  }
  changeRouter(event,index){
    this.setState({
      defaultActive:index
    })
  }
render(){
    return (
      <Router>
        <div className='out-container'>
          <ul className='out-routers clearfix'>
            <li className={this.state.defaultActive === 1 ?'router-active':''} onClick={(event)=>{this.changeRouter(event,1)}}><Link to="/">首页</Link></li>
            <li className={this.state.defaultActive === 2 ? 'router-active' : ''} onClick={(event) => { this.changeRouter(event, 2) }}><Link to="/music">音乐</Link></li>
            <li className={this.state.defaultActive === 3 ? 'router-active' : ''} onClick={(event) => { this.changeRouter(event, 3) }}><Link to="/movie">电影</Link></li>
            <li className={this.state.defaultActive === 4 ? 'router-active' : ''} onClick={(event) => { this.changeRouter(event, 4) }}><Link to="/handle">操作</Link></li>
            <li className={this.state.defaultActive === 5 ? 'router-active' : ''} onClick={(event) => { this.changeRouter(event, 5) }}><Link to="/others">其他</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/music" component={Music} />
          <Route path="/movie" component={Movie} />
          <Route path="/handle" component={Handle} />
          <Route path="/others" component={Others} />
        </div>
      </Router>
    )
  }
}
ReactDom.render(
(
    <ReactApp />
),
document.getElementById('app'))
