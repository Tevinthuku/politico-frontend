import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../tests/testutils";

import Snackbar from "../";

describe("<Snackbar />", () => {
  test("should render the snackbar without errors", () => {
    const wrapper = shallow(<Snackbar state="open" type="success" />);
    expect(wrapper.exists(`[data-test="snack-wrap"]`)).toBe(true);
  });

  test("should render message passed as prop", () => {
    const wrapper = shallow(<Snackbar state="open" message={"Hello tests"} />);
    const messagecontainer = findByTestAttr(wrapper, "snack-message");
    expect(messagecontainer.text()).toBe("success: Hello tests");
  });

  test("should not render snackbar if state is set to close", () => {
    const wrapper = shallow(<Snackbar type="success" state="close" />);
    expect(wrapper.exists(`[data-test="snack-wrap"]`)).toBe(false);
  });

  test("should call the handleClose function on clicking the close icon", () => {
    const handleClose = jest.fn();
    const wrapper = shallow(
      <Snackbar state="open" type="error" handleClose={handleClose} />
    );
    const closeicon = findByTestAttr(wrapper, "snack-close");
    closeicon.simulate("click");
    expect(handleClose).toBeCalled();
    expect(handleClose).toBeCalledWith({
      handleClose: handleClose,
      state: "open",
      type: "error"
    });
  });
});
