import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import withTracker from "./components/withTracker";
import { Route, Router, Redirect } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { unregister as unregisterServiceWorker } from "./registerServiceWorker";
const history = createBrowserHistory();

// unregisterServiceWorker();

ReactDOM.render(
  <Router history={history}>
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
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
