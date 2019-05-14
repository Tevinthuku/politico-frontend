import React from "react";
import { storiesOf } from "@storybook/react";

import Listitem from "../../src/components/listitem";

const items = [
  {
    title: "Basic",
    message: "Basic listitem"
  },
  {
    title: "Second Basic",
    message: "Second basic listitem"
  }
];

storiesOf("Listitem", module)
  .add("basic lisitem", () => (
    <Listitem title={"Basic"} message={"Basic listitem"} />
  ))
  .add("multiple listitems", () => (
    <div>
      {items.map((item, i) => (
        <Listitem key={i} {...item} />
      ))}
    </div>
  ));
