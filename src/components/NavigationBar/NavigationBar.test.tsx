import React from "react";
import { shallow } from "enzyme";

import NavigationBar from "./NavigationBar";

describe("NavigationBar component", () => {
  const wrapper = shallow(<NavigationBar />);

  it("Should render <NavigationBar/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
  });
});
