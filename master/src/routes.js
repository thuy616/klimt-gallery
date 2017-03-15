import React from 'react';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Base from './components/main';
import Home from './components/Home';
import DynamicContent from './containers/DynamicContent/DynamicContent';

export default (
  <Router>

    <Route path="/" component={Base}>
      {/* Default route*/}
      <IndexRoute component={Home} />
    </Route>

    <Route path="*" component={NotFound} />

  </Router>
);
