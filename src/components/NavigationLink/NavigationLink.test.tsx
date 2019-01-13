import React from "react";
import { shallow } from "enzyme";

import NavigationLink from "./NavigationLink";

describe("NavigationLink component", () => {
  const wrapper = shallow(<NavigationLink to="/" />);
  it("Should render <NavigationLink/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
  });
});
