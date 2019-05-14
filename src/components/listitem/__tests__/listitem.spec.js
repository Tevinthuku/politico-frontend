import React from "react";

import Listitem from "../";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../tests/testutils";

describe("<Listitem />", () => {
  test("should render listitem without error", () => {
    const wrapper = shallow(
      <Listitem title="demo" message="new demo message" />
    );

    const avatar = findByTestAttr(wrapper, "listitem-avatar");
    const messagentitle = findByTestAttr(wrapper, "listitem-content");

    expect(avatar.text()).toBe("D");
    expect(messagentitle.text()).toBe("demonew demo message");
  });
});
