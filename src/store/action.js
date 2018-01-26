export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const AUDIO_ELEMENT = 'AUDIO_ELEMENT';
export const CURRENT_MUSIC = 'CURRENT_MUSIC';
export const MUSIC_LIST = 'MUSIC_LIST';
export const AUDIO_PLAY = 'AUDIO_PLAY';
export const AUDIO_PAUSE = 'AUDIO_PAUSE';
export function decrement() {
    return{
        type:DECREMENT_COUNTER
    }
}
export function increment(){
    return{
        type:INCREMENT_COUNTER
    }
}
export function audioElement(el){
    return{
        type:AUDIO_ELEMENT,
        el
    }
}
export function currentMusic(item){
    return{
        type:CURRENT_MUSIC,
        item
    }
}
export function musicList(ary){
    return{
        type:MUSIC_LIST,
        ary
    }
}
export function audioPlay(){
    return{
        type:AUDIO_PLAY
    }
}
export function audioPause(){
    return{
        type:AUDIO_PAUSE
    }
}