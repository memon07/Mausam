import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';
// import { HashRouter } from 'react-router-dom'
import createStore from '../src/store/createStore'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();