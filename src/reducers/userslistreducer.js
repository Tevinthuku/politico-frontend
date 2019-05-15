import actionTypes from "../actions/actionTypes";

export default (
  state = {
    isFetching: true
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_USERS_LIST:
      return { ...state, isFetching: false, payload: action.payload };
    default:
      return state;
  }
};
