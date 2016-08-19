import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer'

import { stringify, parse } from 'qs'
import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const stringifyQuery = function(query) {
  stringify(query, { arrayFormat: 'brackets' })
}
const history = useRouterHistory(createBrowserHistory) ({
  parseQueryString: parse, stringifyQuery
})

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home}/>
          <Route path='forecast' component={ForecastContainer} >
               <Route path=':location'/>
               <Route path=':location/details/:date' />
          </Route>

        </Route>

    </Router>
);

export default routes