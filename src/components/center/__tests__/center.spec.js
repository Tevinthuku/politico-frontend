import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../tests/testutils";
import Center from "../";

describe("<Center />", () => {
  test("should render Center component without error", () => {
    const wrapper = shallow(<Center />);
    const container = findByTestAttr(wrapper, "center-container");
    expect(container.exists()).toBe(true);
  });
});
