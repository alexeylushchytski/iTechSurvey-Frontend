import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import $ from 'jquery';
import {
  composeWithDevTools
} from 'redux-devtools-extension'
//  import thunk from 'redux-thunk'
//  import rootReducer from '../reducers/rootReducer'
import reducers from '../Layout/reducers/index';
const initialState = {
  todos: {
    sub1: null,
    sub2: 'shfdjghjskd'
  }
};

const configureStore = (initState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
    const store = createStore(
      reducers,
      initState,
      compose(window.devToolsExtension ? window.devToolsExtension() : f => f,)
      )
    return store
}

const store = configureStore(initialState);

export default store;