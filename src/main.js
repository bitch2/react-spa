import React from 'react'
import ReactDom from 'react-dom'
import Banner from './components/banner/index'
import InfoNav from './components/info/index'
import Search from './components/search/search'
import MainMenu from './components/mainMenu/index'
import SlideShow from './components/slideShow/index'
import SideService from './components/sideService/index'
import MidddleShow from './components/middleShow/index'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import  'font-awesome/css/font-awesome.css'
import './assets/css/reset.css'
import './assets/css/main.scss'
ReactDom.render(
(
  <div>
    <Banner />
    <InfoNav />
    <div className='container'>
      <Search />
      <div className='clearfix'>
       <MainMenu/>
       <SlideShow />
       <SideService />
      </div>
      <MidddleShow />
    </div>
  </div>
),
document.getElementById('app'))
