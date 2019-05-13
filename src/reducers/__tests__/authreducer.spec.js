import actionTypes from "../../actions/actionTypes";

import authReducer from "../authreducer";

test("should return empty object as initial state", () => {
  const newState = authReducer(undefined, {});

  expect(newState).toEqual({});
});

test("should return user object once SET_USER_DETAILS action creator is dispatched ", () => {
  const newState = authReducer(undefined, {
    type: actionTypes.SET_USER_DETAILS,
    payload: {
      token: "",
      user: {
        email: "tev@gmail.com",
        username: "tev"
      }
    }
  });

  expect(newState).toEqual({
    token: "",
    user: {
      email: "tev@gmail.com",
      username: "tev"
    }
  });
});
