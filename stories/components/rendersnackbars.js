import React from "react";

import { storiesOf } from "@storybook/react";

import { storeFactory } from "../../src/tests/testutils";

import Rendersnackbar from "../../src/components/rendersnackbars";

const firstStore = storeFactory({
  errors: [
    {
      message: "Not allowed"
    }
  ]
});

const multipleErrors = storeFactory({
  errors: [
    {
      message: "Not allowed"
    },
    {
      message: "Not allowed"
    }
  ]
});

storiesOf("Rendersnackbar", module)
  .add("with 1 snackbars", () => <Rendersnackbar store={firstStore} />)
  .add("with 2 snackbars", () => (
    <Rendersnackbar
      store={multipleErrors}
      handleClose={props => console.log(props)}
    />
  ));
