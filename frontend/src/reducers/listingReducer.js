import {FETCH_LISTING} from '../actions/types'

export default function( state = [] , action ){
    // console.log(action);
    switch(action.type){
        case FETCH_LISTING:
            return action.payload;
        default:
            return state;        
    }
}