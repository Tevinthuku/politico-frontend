import React from "react";
import { storiesOf } from "@storybook/react";

import Center from "../../src/components/center";

storiesOf("Center component", module)
  .add("Basic Center component", () => (
    <Center>
      <h1>Container</h1>
    </Center>
  ))
  .add("Basic Center component with mixed children elements", () => (
    <Center>
      <div>
        <p>Place</p>
      </div>
      <div>
        <h2>Center</h2>
      </div>
    </Center>
  ));
