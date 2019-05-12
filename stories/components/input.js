import React from "react";
import { storiesOf } from "@storybook/react";

import { Input, Textarea } from "../../src/components/input";

storiesOf("Input", module).add("basic input", () => (
  <Input placeholder="email" type="email" />
));

storiesOf("Textarea", module).add("basic textfield", () => (
  <Textarea placeholder="body" />
));
