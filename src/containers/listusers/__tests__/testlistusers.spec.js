import React from "react";

import { shallow, mount } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../tests/testutils";

import ConnectedUsersList, { Listusers } from "../";

describe("<Listusers />", () => {
  test("should if it renders loading div when data is still loading", () => {
    const wrapper = shallow(
      <Listusers
        userslist={{
          isFetching: true,
          payload: []
        }}
      />
    );

    const loadingcomponent = findByTestAttr(wrapper, "loading");
    expect(loadingcomponent.exists()).toBe(true);
  });

  test("should render list of users once payload is populated", () => {
    const wrapper = shallow(
      <Listusers
        userslist={{
          isFetching: false,
          payload: [
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
          ]
        }}
      />
    );

    const userComponents = findByTestAttr(wrapper, "each-user");
    expect(userComponents.length).toBe(2);
  });
  test("should call getUsers on Listusers mount", () => {
    const getAllUsers = jest.fn();

    const wrapper = shallow(
      <Listusers
        {...{ getAllUsers }}
        userslist={{
          isFetching: true,
          payload: []
        }}
      />
    );

    //run lifecycle method
    wrapper.instance().componentDidMount();

    const numberOfCalls = getAllUsers.mock.calls.length;
    expect(numberOfCalls).toBe(1);
  });
});

describe("<ConnectedUsersList />", () => {
  test("should show loading from redux store isFetching", () => {
    const store = storeFactory({
      userslist: {
        isFetching: true,
        payload: []
      }
    });
    const wrapper = mount(<ConnectedUsersList {...{ store }} />);
    const loadingcomponent = findByTestAttr(wrapper, "loading");
    expect(loadingcomponent.exists()).toBe(true);
  });
});
