import React from "react";

import "./center.css";

export default props => (
  <div className="center" data-test="center-container">
    <div
      style={{
        display: "inline-block"
      }}
    >
      {props.children}
    </div>
  </div>
);
