import React from "react";
import { Link, StaticRouter } from "react-router-dom";

import { shallow, mount } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../tests/testutils";

import Layout, { UnconnectedLayout } from "../";

describe("<UnconnectedLayout />", () => {
  test("should render without errors", () => {
    const wrapper = shallow(<UnconnectedLayout />);
    expect(
      wrapper.contains(
        <Link data-test="anchor" to="/" className="active">
          Politico
        </Link>
      )
    ).toBe(true);
  });
  test("should change open state from false to true on menu click", () => {
    const wrapper = shallow(<UnconnectedLayout />);
    const menuitem = findByTestAttr(wrapper, "nav-toggle");
    menuitem.simulate("click");
    expect(wrapper.state().open).toBe(true);
  });
  test("should render different icons on open state change", () => {
    const wrapper = shallow(<UnconnectedLayout />);
    expect(findByTestAttr(wrapper, "menu-open").exists()).toBe(true);
    expect(findByTestAttr(wrapper, "menu-close").exists()).toBe(false);
    const menuitem = findByTestAttr(wrapper, "nav-toggle");
    menuitem.simulate("click");
    wrapper.update();
    expect(findByTestAttr(wrapper, "menu-open").exists()).toBe(false);
    expect(findByTestAttr(wrapper, "menu-close").exists()).toBe(true);
  });

  test("should render all anchor tags to the screen", () => {
    const wrapper = shallow(<UnconnectedLayout />);
    expect(wrapper.find(Link).some(`[data-test="anchor"]`)).toBe(true);
  });
});

describe("<Layout />", () => {
  test("should render login anchor if user is not logged in", () => {
    const wrapper = shallow(<UnconnectedLayout user={{}} />);
    expect(
      wrapper.contains(
        <Link data-test="anchor" to="/login">
          Login
        </Link>
      )
    ).toBe(true);
  });
  test("should not render login if user is logged in", () => {
    const store = storeFactory({
      user: {
        data: {
          message: "Logged in successfully",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRldmlua3VAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2V9.L-KVDPJUOu-uy3DiMc_P1u40yvDr5EIC6aY0bQgVCuA",
          user: { id: 2, username: "Tevyn" }
        },
        status: 200
      }
    });

    const wrapper = mount(
      <StaticRouter>
        <Layout {...{ store }} />
      </StaticRouter>
    );
    expect(
      wrapper.contains(
        <Link data-test="anchor" to="/login">
          Login
        </Link>
      )
    ).toBe(false);

    const logoutcomponent = findByTestAttr(wrapper, "anchor-logout");

    expect(logoutcomponent.exists()).toBe(true);
  });

  test("should call logout if logout anchor tag is clicked", () => {
    let logout = jest.fn();

    const user = {
      data: {
        message: "Logged in successfully",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRldmlua3VAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2V9.L-KVDPJUOu-uy3DiMc_P1u40yvDr5EIC6aY0bQgVCuA",
        user: { id: 2, username: "Tevyn" }
      },
      status: 200
    };

    const wrapper = shallow(<UnconnectedLayout {...{ logout, user }} />);

    const logoutcomponent = findByTestAttr(wrapper, "anchor-logout");
    logoutcomponent.simulate("click");
    expect(logout).toBeCalled();
  });
});
