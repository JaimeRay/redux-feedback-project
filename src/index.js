import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//this sets the original review page thingy to empty or starting at 0
let feedbackState = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments: ''
}


const feedbackReducer = (state = feedbackState, action) => {
    switch (action.type) {
        //I was trying something new here  and i think i might like it better than the usual if statement and having
        // a bunch of else's
        case 'SET_FEELINGS':
            return {
                ...state,
                feelings: action.payload
            }
        case 'SET_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            }
        case 'SET_SUPPORT':
            return {
                ...state,
                support: action.payload
            }
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'CLEAR_STATE':
            return feedbackState

        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
