import { createReducer } from 'redux-create-reducer';
//import  as ActionTypes from '../constants/ActionTypes';
 
const initialState = {};
 
 
export const todos = createReducer(initialState, {
  ['ACTION'](state, action) {
    return {
        ...state
    }
  }
})