import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/Main';

export var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Main} />

    </Router>
);

