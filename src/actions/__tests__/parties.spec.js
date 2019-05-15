import axios from "axios";

import { storeFactory } from "../../tests/testutils";

import { getAllParties } from "../parties";

jest.spyOn(axios, "get");
const data = [
  {
    id: 1,
    name: "First Party",
    hqAddress: "HQ1"
  },
  {
    id: 2,
    name: "Second Party",
    hqAddress: "HQ2"
  }
];
test("should set payload prop on partieslist after calling getAllParties", () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        data
      }
    })
  );

  const store = storeFactory();

  return store.dispatch(getAllParties()).then(() => {
    const newState = store.getState();
    expect(newState.parties).toEqual({
      isFetching: false,
      partieslist: data
    });
  });
});
