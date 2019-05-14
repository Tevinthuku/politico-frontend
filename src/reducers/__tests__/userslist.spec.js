import actionTypes from "../../actions/actionTypes";

import usersListReducer from "../userslistreducer";

test("should return object with default prop as initial state", () => {
  const newState = usersListReducer(undefined, {});

  expect(newState).toEqual({
    isFetching: true
  });
});

test("should set list of users in payload and set isFetching to false", () => {
  const data = [
    {
      email: "ggg@gmail.com",
      id: 12,
      isAdmin: false,
      username: "teeeee"
    }
  ];
  const newState = usersListReducer(undefined, {
    type: actionTypes.SET_USERS_LIST,
    payload: data
  });

  expect(newState).toEqual({
    isFetching: false,
    payload: data
  });
});
