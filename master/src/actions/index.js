import fetch from 'isomorphic-fetch';
import * as ActionTypes from './types';

export function fetchContent() {
  return (dispatch) => {
    return fetch(`api/content`)
    .then(response => response.json())
    .then(body => {
      console.log("body", body);
      dispatch({
        type: ActionTypes.FetchContent,
        payload: body.data.content
      })
    })
  }
}
