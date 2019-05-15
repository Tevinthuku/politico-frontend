import actionTypes from "../actions/actionTypes";

export default (
  state = {
    isFetching: true
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_PARTIES_LIST:
      return { ...state, partieslist: action.payload, isFetching: false };
    default:
      return state;
  }
};
