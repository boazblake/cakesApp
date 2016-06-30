import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import backbone from 'backbone';
import App from './app';
import Admin from './admin/admin';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
  ), document.querySelector('.app'));