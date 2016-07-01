import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import backbone from 'backbone';
import Admin from './admin/admin';
import Home from './home';
import Products from './products';
import Menu from './menu';
import $ from 'jquery'

const app = function() {


class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render(){
    return (
      <div>
        <Home />
        <Products/>
        <Menu />
      </div>
    )
  }
}

	ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/admin' component={Admin} />
    </Router>
    ), document.querySelector('.app'));
}

app()






