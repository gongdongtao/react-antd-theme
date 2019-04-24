import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom'; // Redirect, withRouter, matchPath

import App from './app/pages/app';
const Login = lazy(() => import('./app/pages/login'));
const Register = lazy(() => import('./app/pages/register'));
const WholeSpace = lazy(() => import('./app/pages/WholeSpace'));

class AppRoutes extends Component {
  render() {
    return (
      <App>
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path='/' render={props => <WholeSpace {...props} />} />
            <Route path='/login' render={props => <Login {...props} />} />
            <Route path='/register' render={props => <Register {...props} />} />
          </Switch>
        </Suspense>
      </App>
    )
  }
}

export default AppRoutes
