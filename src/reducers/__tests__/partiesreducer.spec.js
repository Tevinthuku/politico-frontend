import actionTypes from "../../actions/actionTypes";

import partiesReducer from "../partiesreducer";

test("should return object with default prop as initial State ", () => {
  const newState = partiesReducer(undefined, {});

  expect(newState).toEqual({
    isFetching: true
  });
});

test("should set payload to list of parties and isFetching to false", () => {
  const data = [
    {
      id: 1,
      name: "First Party",
      hqAddress: "HQ1"
    },
    {
      id: 2,
      name: "Second Party",
      hqAddress: "HQ2"
    }
  ];

  const newState = partiesReducer(undefined, {
    type: actionTypes.SET_PARTIES_LIST,
    payload: data
  });

  expect(newState).toEqual({
    isFetching: false,
    partieslist: data
  });
});
