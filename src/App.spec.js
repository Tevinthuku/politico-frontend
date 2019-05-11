import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  test("should render without error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
  });
});
