import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Home = React.lazy(() => import("./containers/home"));
export const Login = React.lazy(() => import("./containers/login"));
export const Nomatch = React.lazy(() => import("./containers/notfound"));
export const Listusers = React.lazy(() => import("./containers/listusers"));

export default props => {
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/listusers" component={Listusers} />
          <Route component={Nomatch} />
        </Switch>
      </Suspense>
    </Router>
  );
};
