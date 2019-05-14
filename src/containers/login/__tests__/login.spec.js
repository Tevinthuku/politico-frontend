import React from "react";

import { StaticRouter } from "react-router-dom";

import { shallow, mount } from "enzyme";

import Login, { LoginUnconnectedComponent } from "../";

import { findByTestAttr, storeFactory } from "../../../tests/testutils";

/**
 * @function setup - func
 * @param {object} initialState - Initial state of component
 * @returns ShallowComponent
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <StaticRouter>
      <Login {...{ store }} />
    </StaticRouter>
  );
};

describe("<Login />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render without errors", () => {
    let emailinput = findByTestAttr(wrapper, "email");
    let passwordinput = findByTestAttr(wrapper, "password");
    expect(emailinput.exists()).toBe(true);
    expect(passwordinput.exists()).toBe(true);
  });

  test("should render submit button", () => {
    let submitbutton = findByTestAttr(wrapper, "submit");
    expect(submitbutton.length).toBe(1);
  });
});

describe("<LoginUnconnectedComponent />", () => {
  let wrapper;
  let emailinput;
  let passwordinput;
  let form;
  let props;
  let history = {
    push: jest.fn()
  };
  beforeEach(() => {
    props = {
      history: history,
      login: jest.fn()
    };
    wrapper = shallow(<LoginUnconnectedComponent {...props} />);
    emailinput = findByTestAttr(wrapper, "email");
    passwordinput = findByTestAttr(wrapper, "password");
    form = findByTestAttr(wrapper, "loginform");
  });
  test("should hit login fn prop on hitiing submit", () => {
    emailinput.simulate("change", {
      target: {
        value: "tev@gmail.com",
        name: "email"
      }
    });

    passwordinput.simulate("change", {
      target: {
        value: "pass123",
        name: "password"
      }
    });

    form.simulate("submit", {
      preventDefault: jest.fn()
    });

    expect(props.login).toBeCalled();
    expect(props.login).toHaveBeenCalledWith(
      "tev@gmail.com",
      "pass123",
      history
    );
  });
});
