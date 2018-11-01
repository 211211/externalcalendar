import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import App from "../containers/App";
import store from "./store";

function TokenAndColor({ match: { params } }) {
  return <App paramsUser={params} />;
}

const history = createBrowserHistory();
const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/:token/:color" component={TokenAndColor} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default Root;
