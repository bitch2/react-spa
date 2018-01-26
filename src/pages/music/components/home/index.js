import React, {Component} from 'react'
import FA from 'react-fontawesome'
import { connect } from 'react-redux'
import { currentMusic, musicList, audioElement } from '../../../../store/action'
class musicHome extends Component{
    constructor(props){
      super(props)
      this.changeMusic=this.changeMusic.bind(this)
    }
    changeMusic(e,item){
      this.props.setCurrentMusic(item)
    }
    render(){
        return(
            <div className='music-home'>
                <div className='music-home-title'>
                  <span className='song'>歌曲</span>
                  <span className='singer'>歌手</span>
                  <span className='time'>时长</span>
                </div>
                <ul className='music-home-list'>
                    {
                      this.props.musicList.map((item,index)=>{
                        return(
                          <li key={index}>
                            <span className='song'>{item.name}</span>
                            <span className='singer'>{item.singer}</span>
                            <span className='time'></span>
                            <FA name='play-circle-o' onClick={(e) => {this.changeMusic(e,item)}} />
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      currentMusic: state.currentMusic,
      musicList: state.musicList,
      audioElement: state.audioElement
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCurrentMusic : item => dispatch(currentMusic(item))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(musicHome)
