import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home component", () => {
  const wrapper = shallow(<Home />);
  it("Should render <Home/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
    expect(wrapper.find("NavigationBar").length).toEqual(1);
    expect(wrapper.find("HomeRouter").length).toEqual(1);
  });
});
