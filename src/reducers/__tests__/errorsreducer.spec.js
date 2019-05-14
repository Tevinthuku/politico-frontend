import actionTypes from "../../actions/actionTypes";

import errorsReducer from "../errorsreducer";

test("should return empty array as initial state", () => {
  const newState = errorsReducer(undefined, {});
  expect(newState).toEqual([]);
});

test("should return array of object once SET_ERROR action type is dispatched", () => {
  const newState = errorsReducer(undefined, {
    type: actionTypes.SET_ERROR,
    payload: {
      error: "Not found",
      status: 404
    }
  });
  expect(newState).toEqual([
    {
      error: "Not found",
      status: 404
    }
  ]);
});
