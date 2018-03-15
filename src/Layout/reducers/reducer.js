import { createReducer } from 'redux-create-reducer';
 
const initialState = {
  isHide: false,
};
 
 
 const User = createReducer(initialState, {
  ['ACTION'](state, action) {
    const newState = Object.assign({}, state);
    newState.isHide = !newState.isHide;

    return newState;
  }
});

export default User;

