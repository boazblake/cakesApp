import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import backbone from 'backbone';

const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>YOLO</h1>
		}
	})

	ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Header} />
    </Router>
    ), document.querySelector('.container'));
}

app()






