import React from "react";
import { storiesOf } from "@storybook/react";

import Layout from "../../src/components/layout";

storiesOf("Layout", module)
  .add("blank layout", () => <Layout />)
  .add("Layout with children", () => (
    <Layout>
      <h1>Hello World</h1>
      <h2>Hello Back</h2>
    </Layout>
  ));
