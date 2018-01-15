"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './MainPage';

ReactDOM.render(<MainPage />,
    document.getElementById('container')
);




// import { createStore } from 'redux';
// function playlist(state =[],action ){
//     console.log(action);
//     return state;
// }
// const store = createStore();
// console.log(store.getState());
// store.subscribe(()=>{             // подписываемся на изменения store
// console.log('subscribe', store.getState());
// });
// store.dispatch({type:'ADD_TRACK', playload: 'Smells like ...'});
