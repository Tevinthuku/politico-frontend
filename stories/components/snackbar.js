import React from "react";
import { storiesOf } from "@storybook/react";

import Snackbar from "../../src/components/snackbar";

storiesOf("Snackbar", module)
  .add("Default snackbar", () => (
    <Snackbar message="Hello world" state="open" />
  ))
  .add("Multiple snackbars", () => (
    <div>
      <Snackbar message="Hello world" state="open" />
      <Snackbar message="Hello world" state="close" />
    </div>
  ));
