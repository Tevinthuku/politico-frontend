import React from "react";

import { shallow } from "enzyme";

import Center from "../../../components/center";
import Homepage from "../";

describe("<Homepage />", () => {
  test("should render Homepage without any errors", () => {
    const wrapper = shallow(<Homepage />);

    expect(wrapper.find(Center).length).toBe(2);
  });
});
