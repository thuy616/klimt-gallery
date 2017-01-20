import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as ActionTypes from '../actions/types';
import contentReducer from './contentReducer';

// top lever reducer
const appReducer = combineReducers({
  routing: routerReducer,
  content: contentReducer
});

const rootReducer = (state, action) => {
  // reset entire application state when user signs out
  if (action.type === ActionTypes.UnauthenticateUser) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
