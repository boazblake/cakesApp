import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import backbone from 'backbone';
import Admin from './admin/admin';

const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>YOLO</h1>
		}
	})

	ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Admin} />
    </Router>
    ), document.querySelector('.container'));
}

app()






