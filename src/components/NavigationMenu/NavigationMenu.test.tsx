import React from "react";
import { shallow } from "enzyme";

import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu component", () => {
  const wrapper = shallow(<NavigationMenu />);
  it("Should render <NavigationMenu/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
  });
});
