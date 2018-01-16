import { combineReducers } from 'redux';

import {SUBMIT_MESSAGE} from "../actions/actions";

const initState = {
    mess: [],
};


const messageReducer = function(state = initState, action) {
    if (action.type === 'SUBMIT_MESSAGE') {
        return {...state, mess:[...state.mess,...action.messages]};

    }
    return state;
};


let combinedReducer = combineReducers({
    messagesList: messageReducer,
});


export default combinedReducer;