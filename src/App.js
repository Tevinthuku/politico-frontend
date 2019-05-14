import React from "react";
import { hot } from "react-hot-loader";

import Routes from "./routes";
import Rendererrors from "./components/rendersnackbars";

function App() {
  return (
    <div>
      <Rendererrors />
      <Routes />
    </div>
  );
}

export default hot(module)(App);
