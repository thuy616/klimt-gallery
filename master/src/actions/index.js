import fetch from 'isomorphic-fetch';
import * as ActionTypes from './types';

let apiUri = 'api';

if(process.env.NODE_ENV==='development') {
  console.log('process.env.NODE_ENV', "development");
  apiUri = 'http://localhost:8080/api';
} else {
  if (__CLIENT__) {
    console.log('is client');
    const { protocol, hostname, port } = window.location;
    apiUri = `${protocol}//${hostname}:${port}/api`;
  }
}

export function fetchContent() {
  let statusCode;
  return (dispatch) => {
    return fetch(`${apiUri}/content`)
    .then(response => {
      statusCode = response.statusCode;
      return response;
    })
    .then(response => response.json())
    .then(body => {
      console.log("body", body);
      if (statusCode === 200) {
        dispatch({
          type: ActionTypes.FetchContent,
          payload: body
        });
      } else {
        dispatch({
          type: ActionTypes.FetchError,
          payload: body
        })
      }
    })
  }
}

export function fetchCollections() {
  console.log('actions - fetchCollections');
  return dispatch => {
    return fetch(`${apiUri}/collections`)
    .then (response => response.json())
    .then (body => {
      console.log('body', body);
    })
  }
}
