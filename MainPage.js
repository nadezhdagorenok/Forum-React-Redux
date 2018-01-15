"use strict";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './reducers/reducers.js';
import MessageForm from './components/MessageForm';
import ForumBlock from './components/ForumBlock';


const store = createStore(combinedReducer);

class MainPage extends React.PureComponent {

    render() {

        return (
            <Provider store={store}>
              <div>
                <h1>The best Topics!</h1>
                <MessageForm  />
                <ForumBlock  />
              </div>
            </Provider>
    );

    }

}

function showState() {
    const state = store.getState();
}
store.subscribe(showState);


export default MainPage;