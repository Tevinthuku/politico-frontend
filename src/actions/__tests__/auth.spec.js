import { storeFactory } from "../../tests/testutils";

import axios from "axios";

import { login } from "../auth";

jest.spyOn(axios, "post");

let data = {
  username: "tev",
  email: "tev@gmail.com",
  password: "pass123",
  firstname: "tev",
  lastname: "tev",
  retypedpassword: "pass123"
};

test("should update state with new user details on calling the login action creator after successful login", () => {
  let history = {
    push: jest.fn()
  };
  axios.post.mockResolvedValue({
    status: 200,
    data: {
      token: "kjdkewjriw32435324dwes",
      user: data
    }
  });
  const store = storeFactory();

  return store.dispatch(login("tev@gmail.com", "pass123", history)).then(() => {
    const newState = store.getState();
    expect(newState.user).toEqual({
      token: "kjdkewjriw32435324dwes",
      user: data
    });
    expect(history.push).toBeCalled();
    expect(history.push).toBeCalledWith("/");
  });
});

test("should store error in errros array after unsuccessfull login", () => {
  axios.post.mockImplementation(() =>
    Promise.reject({
      response: {
        data: {
          error: "User does not exist",
          status: 404
        }
      }
    })
  );
  const store = storeFactory();

  return store
    .dispatch(login("tevunknown@gmail.com", "pass123", {}))
    .then(() => {
      const newState = store.getState();
      expect(newState.errors).toEqual([
        {
          error: "User does not exist",
          status: 404
        }
      ]);
    });
});
