import React, {Component} from 'react'
import FA from 'react-fontawesome'
import store from '../../../../store'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { currentMusic } from '../../../../store/action'
class musicHome extends Component{
    constructor(props){
        super(props)
        this.state={
            musicList:[]
        }
      this.playMusic=this.playMusic.bind(this)
    }
    componentDidMount(){    
        this.setState({
            musicList:store.getState().musicList
        })
    }
    playMusic(e,item){
      store.dispatch(currentMusic(item))
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
                      this.state.musicList.map((item,index)=>{
                        return(
                          <li key={index}>
                            <span className='song'>{item.name}</span>
                            <span className='singer'>{item.singer}</span>
                            <span className='time'></span>
                            <FA name='play-circle-o' onClick={this.props.setCurrentMusic(item)} />
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
      currentMusic: state.currentMusic
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCurrentMusic: (item)=>{dispatch(currentMusic(item))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(musicHome)