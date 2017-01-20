import React from 'react';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import SingleView from './components/SingleView/SingleView';
import SubMenu from './components/SubMenu/SubMenu';
import DynamicContent from './containers/DynamicContent/DynamicContent';

export default (
  <Router>

    <Route path="/" component={Base}>
      {/* Default route*/}
      <IndexRoute component={SingleView} />
      <Route path="singleview" component={SingleView}/>
      <Route path="submenu" component={SubMenu}/>
      <Route path="dynamic" component={DynamicContent}/>
    </Route>

    <Route path="*" component={NotFound} />

  </Router>
);
