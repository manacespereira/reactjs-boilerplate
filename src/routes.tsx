import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RepositoriesPage from './pages/RepositoriesPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/repositories" component={RepositoriesPage} />
    </Switch>
  </Router>
);

export default Routes;
