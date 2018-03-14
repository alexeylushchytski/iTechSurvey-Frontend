import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import $ from 'jquery';
// import {
//   composeWithDevTools,
// } from 'redux-devtools-extension'
//  import thunk from 'redux-thunk'
//  import rootReducer from '../reducers/rootReducer'
const initialState = {};

export default function configureStore(initState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
    const store = createStore(
      () => {},
      initState
      )
    return store
  }
