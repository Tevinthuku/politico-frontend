import React from "react";

import { shallow } from "enzyme";

import { Textarea } from "../index";
import { findByTestAttr } from "../../../tests/testutils";

describe("<Textarea />", () => {
  test("should render Textarea without error", () => {
    const wrapper = shallow(<Textarea />);
    const textarea = findByTestAttr(wrapper, "textarea");
    expect(textarea.exists()).toBe(true);
  });

  test("should spread all props to the component", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Textarea {...{ onChange }} />);
    const textfield = findByTestAttr(wrapper, "textarea");
    textfield.simulate("change");

    expect(onChange).toBeCalled();
  });
});
