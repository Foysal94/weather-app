import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

export var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
         <IndexRoute component={Home}/>
         <Route path='forcast/:location' />
        </Route>

    </Router>
);

