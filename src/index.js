import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import withTracker from "./components/withTracker";
import { Route, Router, Redirect } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { unregister as unregisterServiceWorker } from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
const history = createBrowserHistory();

// unregisterServiceWorker();

ReactDOM.render(
  <HashRouter history={history}>
    <div>
      <Route
        exact
        path="/"
        component={() => {
          return <Redirect to="under-construction" />;
        }}
      />
      <Route path="/under-construction" component={withTracker(App, {})} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
