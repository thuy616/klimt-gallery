import fetch from 'isomorphic-fetch';
import * as ActionTypes from './types';

let apiUri = 'api';

if(process.env.NODE_ENV==='development') {
  apiUri = 'http://localhost:8080/api';
} else {
  if (__CLIENT__) {
    const { protocol, hostname, port } = window.location;
    apiUri = `${protocol}//${hostname}:${port}/api`;
  }
}

export function fetchCollections() {
  console.log("apiUri", apiUri);
  let statusCode;
  return dispatch => {
    return fetch(`${apiUri}/collections`)
    .then(response => {
      statusCode = response.status;
      return response;
    })
    .then(response => response.json())
    .then(body => {
      console.log('body:', body);
      if (statusCode === 200) {
        dispatch({
          type: ActionTypes.FetchCollections,
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

export function fetchCollection(slug) {
  let statusCode;
  return dispatch => {
    return fetch(`${apiUri}/collections/${slug}`)
    .then(response => {
      statusCode = response.status;
      return response;
    })
    .then(response => response.json())
    .then(body => {
      if (statusCode === 200) {
        dispatch({
          type: ActionTypes.FetchCollection,
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
