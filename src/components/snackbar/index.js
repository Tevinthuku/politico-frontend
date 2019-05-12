import React from "react";

import "./snackbar.css";

import close from "../../images/close.svg";

const Snackbar = props => {
  const handleClose = event => {
    const { handleClose } = props;
    if (typeof handleClose === "function") {
      handleClose(props);
    }
  };

  const background = () => {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "error";
      default:
        return "success";
    }
  };
  const { type, state, message } = props;

  return (
    <div>
      {state === "open" && (
        <div className="snack-wrap" data-test="snack-wrap">
          <div
            className={
              `${background()} ` +
              (state === "open"
                ? `snackbar animated`
                : `snackbar closesnackbar`)
            }
          >
            <div className="flex-container">
              <div>
                <p data-test="snack-message">
                  <strong>{background()}:</strong> {message}
                </p>
              </div>
              <div>
                <img
                  src={close}
                  alt="close"
                  data-test="snack-close"
                  onClick={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Snackbar;
