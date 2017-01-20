import * as ActionTypes from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case ActionTypes.FetchContent:
      return {...state, secretContent: action.payload}
    default:
      return state;
  }
  return state;
}
