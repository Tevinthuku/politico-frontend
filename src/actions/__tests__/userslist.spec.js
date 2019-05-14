import axios from "axios";

import { storeFactory } from "../../tests/testutils";

import { getAllUsers } from "../userslist";

jest.spyOn(axios, "get");
const data = [
  {
    email: "ggg@gmail.com",
    id: 12,
    isAdmin: false,
    username: "teeeee"
  },
  {
    email: "wekesabill@gmail.com",
    id: 30,
    isAdmin: false,
    username: "wekesabill"
  }
];
test("should set payload prop on userlist to the value returned as the list of users", () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        data
      },
      status: 200
    })
  );
  const store = storeFactory();

  return store.dispatch(getAllUsers()).then(() => {
    const newState = store.getState();
    expect(newState.userslist).toEqual({
      isFetching: false,
      payload: data
    });
  });
});
