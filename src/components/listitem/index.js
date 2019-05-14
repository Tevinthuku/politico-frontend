import React from "react";

import "./listitem.css";

export default props => (
  <div {...props} className="listitem-container">
    <div data-test="listitem-avatar" className="listitem-avatar">
      {props.title[0].toUpperCase()}
    </div>
    <div className="listitem-content" data-test="listitem-content">
      <div className="listitem-title">{props.title}</div>
      <div className="listitem-content">{props.message}</div>
    </div>
  </div>
);
