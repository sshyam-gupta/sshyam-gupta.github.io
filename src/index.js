import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import withTracker from "./components/withTracker";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App";
const history = require("history");
const browserHistory = history.createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/under-construction" component={withTracker(NotFound, {})} />
      <Route path="*" component={withTracker(NotFound, {})} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
