import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import createStore from '../src/store/createStore'
import { Router } from 'react-router'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import history from './history'


import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/"  component={Signup} />
          <Route exact path="/login"  component={Login} />
          <Route exact path="/dashboard"  component={Dashboard} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();