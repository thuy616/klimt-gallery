import * as ActionTypes from '../actions/types';

const initialState = {
  collections: [],
  collection: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ActionTypes.FetchCollections:
      return {...state, collections: action.payload}
    default:
      return state;
  }
  return state;
}
