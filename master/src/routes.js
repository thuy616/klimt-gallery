import React from 'react';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Base from './components/main';
import Home from './components/Home';
import Collection from './components/Collection';
import Slideshow from './components/Slideshow';

export default (
  <Router>

    <Route path="/" component={Base}>
      {/* Default route*/}
      <IndexRedirect to="collections" />
      <Route path="collections" component={Home} />
      <Route path="collections/:slug" component={Collection} />
      <Route path="collections/:slug/slideshow" component={Slideshow} />

    </Route>

    <Route path="*" component={NotFound} />

  </Router>
);
