import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import hashHistory from './app/store/hashHistory';
import AppRoutes from './app-route';
import configureStore from './app/store/configureStore';
import './scss/app.scss';

var store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <AppRoutes />
        </Router>
      </Provider>
    );
  }
}

export default App;
