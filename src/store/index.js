import { createStore,combineReducers,appMiddleware} from 'redux'
count = (state=0,action) => {
    switch (action.type){
        case 'ADD':return state+1;
        case 'REDUCER':return state-1;
        default:return state
    }
}
let store = createStore(count)
let currentValue = store.getState()