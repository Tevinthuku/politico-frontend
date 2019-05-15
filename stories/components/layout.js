import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { storiesOf } from "@storybook/react";

import Layout from "../../src/components/layout";

storiesOf("Layout", module)
  .add("blank layout", () => (
    <Router>
      <Layout />
    </Router>
  ))
  .add("Layout with children", () => (
    <Router>
      <Layout>
        <h1>Hello World</h1>
        <h2>Hello Back</h2>
      </Layout>
    </Router>
  ));
