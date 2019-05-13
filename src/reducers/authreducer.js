import actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
