import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import backbone from 'backbone';
import Admin from './admin/admin';
import Home from './home';
import Products from './products/products';
import Menu from './menu';

const app = function() {


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      products: []
    }
  }
  
  render(){
    return (
      <div>
        <Home />
        <Products products={this.state.products}/>
        <Menu />
      </div>
    )
  }
}

	ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Admin} />
    </Router>
    ), document.querySelector('.app'));
}

app()






