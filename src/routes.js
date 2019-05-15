import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";

import Home from "./containers/home";
import Nomatch from "./containers/notfound";
import Listusers from "./containers/listusers";
import Login from "./containers/login";
import Listparties from "./containers/listparties";

export { Home, Nomatch, Listusers, Login, Listparties };

export default props => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/listusers" component={Listusers} />
            <Route exact path="/listparties" component={Listparties} />
            <Route component={Nomatch} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};
