import React from "react";
import { connect } from "react-redux";
import Snackbar from "../snackbar";

import { removeError } from "../../actions/errors";

export const UnconnectedSnackbar = props => {
  const { errors } = props;
  return (
    <div>
      {errors.map((error, i) => (
        <Snackbar
          key={i}
          handleClose={props.handleClose}
          {...error}
          type="error"
          state="open"
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { errors } = state;
  return {
    errors
  };
};

export default connect(
  mapStateToProps,
  { handleClose: removeError }
)(UnconnectedSnackbar);
