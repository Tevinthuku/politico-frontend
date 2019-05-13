import actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return [...state, action.payload];
    case actionTypes.REMOVE_ERROR:
      return state.filter(err => err.message !== action.payload);
    default:
      return state;
  }
};
