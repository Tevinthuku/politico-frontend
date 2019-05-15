import React from "react";

import { shallow } from "enzyme";

import Center from "../../../components/center";

import Notfound from "../";

describe("<Notfound />", () => {
  test("should render without errors", () => {
    const wrapper = shallow(<Notfound />);
    expect(wrapper.find(Center).length).toBe(1);
  });
});
