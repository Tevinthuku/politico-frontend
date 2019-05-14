import actionTypes from "./actionTypes";

export const removeError = error => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_ERROR,
      payload: error.message
    });
  };
};
