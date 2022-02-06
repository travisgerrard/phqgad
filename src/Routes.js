// https://betterprogramming.pub/8-basic-and-advanced-react-router-tips-6993ece8f57a

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './pages/404Page';
import HomePage from './pages/HomePage';
import SubPage from './pages/SubPage';
import Privacy from './pages/Privacy';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sub-page" component={SubPage} />
    <Route exact path="/privacy" component={Privacy} />

    <Route component={Page404} />
  </Switch>
);

export default Routes;
