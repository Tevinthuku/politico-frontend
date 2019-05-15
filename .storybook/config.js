import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
  require("../stories/components/layout");
  require("../stories/components/snackbar");
  require("../stories/components/input");
  require("../stories/components/center");
  require("../stories/components/rendersnackbars");
  require("../stories/components/listitem");
}

configure(loadStories, module);
