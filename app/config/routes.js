import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer'

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home}/>
          <Route path='forecast/:location' component={ForecastContainer} />
        </Route>

    </Router>
);

export default routes