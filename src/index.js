import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import withTracker from './components/withTracker';
import { Route, Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Route exact path="/" component={withTracker(App, {})} />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
