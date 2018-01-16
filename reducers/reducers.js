import { combineReducers } from 'redux';

import {SUBMIT_MESSAGE} from "../actions/actions";

const messages_initState = {
    mess: [],
};

let combinedReducer = combineReducers({
    messagesList: messageReducer,
});

const messageReducer = function(state = messages_initState, action) {
    if (action.type === 'SUBMIT_MESSAGE') {
        return {...state, messagesList:[...state.messagesList,...action.messages]  };
    }
    return state;
};


export default combinedReducer;