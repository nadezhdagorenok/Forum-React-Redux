import { combineReducers } from 'redux';

import {SUBMIT_MESSAGE} from "../actions/actions";


const defaults = {
    MESSAGE: {},

};

let combinedReducer = combineReducers({
    messages: messageReducer,
});

const messageReducer = function(state = defaults.MESSAGE, action) {
    if (action.type === 'SUBMIT_MESSAGE') {
        return [...state,action.messages];
    }
    return state;
};




export default combinedReducer;