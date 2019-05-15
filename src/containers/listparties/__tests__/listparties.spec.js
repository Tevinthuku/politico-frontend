import React from "react";

import { shallow, mount } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../tests/testutils";

import ConnectedPartiesList, { UnconnectedPartiesList } from "../";
import Center from "../../../components/center";
import Listitem from "../../../components/listitem";

describe("<UnconnectedPartiesList />", () => {
  test("should render loading component if isFetching is true", () => {
    const wrapper = shallow(<UnconnectedPartiesList isFetching={true} />);
    expect(wrapper.find(Center).length).toBe(1);
  });

  test("should render items once partieslist is populated", () => {
    const wrapper = shallow(
      <UnconnectedPartiesList
        partieslist={[
          {
            name: "NASA",
            hqAddress: "Nairobu"
          },
          {
            name: "Jubilee",
            hqAddress: "Nairobi"
          }
        ]}
      />
    );
    expect(wrapper.find(Listitem).length).toBe(2);
  });
});
test("should call getAllParties on componentDidMount", () => {
  let getAllParties = jest.fn();
  const wrapper = shallow(
    <UnconnectedPartiesList
      {...{ getAllParties }}
      partieslist={[
        {
          name: "NASA",
          hqAddress: "Nairobu"
        },
        {
          name: "Jubilee",
          hqAddress: "Nairobi"
        }
      ]}
    />
  );

  wrapper.instance().componentDidMount();
  expect(getAllParties.mock.calls.length).toBe(1);
});

describe("<ConnectedPartieslist />", () => {
  test("should show loading container when isFetching is true", () => {
    const store = storeFactory({
      parties: {
        isFetching: true,
        partieslist: []
      }
    });

    const wrapper = mount(<ConnectedPartiesList {...{ store }} />);
    const loadingComponent = findByTestAttr(wrapper, "loading");
    expect(loadingComponent.exists()).toBe(true);
  });
});
