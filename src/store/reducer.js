import {INCREMENT_COUNTER,DECREMENT_COUNTER,AUDIO_ELEMENT,CURRENT_MUSIC,MUSIC_LIST} from './action'
import { combineReducers } from 'redux';
const counter = (state = 0,action) => {
    switch (action.type){
        case INCREMENT_COUNTER:
            return state+1;
        case DECREMENT_COUNTER:
            return state-1;
        default:
            return state;
    }
}
const audioElement = (state = null, action) => {
    switch(action.type){
        case AUDIO_ELEMENT:
            return action.el;
        default:
            return state
    }
}
const currentMusic = (state = {}, action) => {
    switch(action.type){
        case CURRENT_MUSIC:
            return action.item;
        default:
            return state
    }
}
const musicList = (state = [] ,action) => {
    switch(action.type){
        case MUSIC_LIST:
            return action.ary;
        default:
            return state
    }
}
const reducers = combineReducers({
    counter,
    audioElement,
    currentMusic,
    musicList
})
export default reducers