import React from 'react';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Base from './components/Layout/Base';
import KlimtBase from './components/Layout/KlimtBase';
import BasePage from './components/Layout/BasePage';
import SingleView from './components/SingleView/SingleView';
import SubMenu from './components/SubMenu/SubMenu';
import DynamicContent from './containers/DynamicContent/DynamicContent';

export default (
  <Router>

    <Route path="/" component={KlimtBase}>
      {/* Default route*/}
      <IndexRoute component={SingleView} />
      <Route path="singleview" component={SingleView}/>
    </Route>

    <Route path="*" component={NotFound} />

  </Router>
);
