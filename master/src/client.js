import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import initTranslation from './components/Common/localize';
import initLoadCss from './components/Common/load-css';
import routes from './routes';
import configureStore from "./store.js";
import { syncHistoryWithStore } from 'react-router-redux';
import cookie from 'react-cookie';
import { AuthenticateUser } from './actions/types';

// Init translation system
initTranslation();
// Init css loader (for themes)
initLoadCss();

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
const reactRoot = document.getElementById('app');
let auth = cookie.load('auth');
if (auth) {
  store.dispatch({ type: AuthenticateUser });
}
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  reactRoot
);

if (process.env.NODE_ENV !== "production") {
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes["data-react-checksum"]) {
    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
  }
}
