import React from "react";
import { mount } from "enzyme";
import { storeFactory, findByTestAttr } from "../../../tests/testutils";

import ConnectedSnackbar, { UnconnectedSnackbar } from "../";

describe("<RenderSnackbars />", () => {
  let store;
  let errors;
  beforeEach(() => {
    store = storeFactory({
      errors: [
        {
          message: "Not allowed"
        },
        {
          message: "Not allowed"
        }
      ]
    });
    errors = [
      {
        message: "Not allowed"
      },
      {
        message: "Not allowed"
      }
    ];
  });
  test("should render 2 snackbars if there are 2 error objects", () => {
    const wrapper = mount(<UnconnectedSnackbar {...{ store, errors }} />);
    const snackbars = findByTestAttr(wrapper, "snack-wrap");
    expect(snackbars.exists()).toBe(true);
    expect(snackbars.length).toBe(2);
  });
  test("should call the handleClose method once close icon is hit", () => {
    const handleClose = jest.fn();
    const wrapper = mount(
      <UnconnectedSnackbar {...{ store, handleClose, errors }} />
    );
    const closeicon = findByTestAttr(wrapper, "snack-close");
    closeicon.first().simulate("click");
    expect(handleClose).toBeCalled();
    expect(handleClose).toBeCalledWith({
      handleClose: handleClose,
      message: "Not allowed",
      state: "open",
      type: "error"
    });
  });
  test("should make sure the ConnectedSnackbar reads from the store", () => {
    const wrapper = mount(<ConnectedSnackbar {...{ store }} />);
    const snackbars = findByTestAttr(wrapper, "snack-wrap");
    expect(snackbars.exists()).toBe(true);
    expect(snackbars.length).toBe(2);
  });
});
