import React from "react";
import { shallow } from "enzyme";

import NavigationMenuItem from "./NavigationMenuItem";

describe("NavigationMenuItem component", () => {
  const wrapper = shallow(
    <NavigationMenuItem title="Some title" path="/some-path" />
  );
  it("Should render <NavigationMenuItem/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
  });

  it("Should NOT wrap button in a link if IS disabled.", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find("NavigationLink").length).toEqual(0);
  });

  it("Should wrap button in a link if IS NOT disabled.", () => {
    wrapper.setProps({ disabled: false });
    expect(wrapper.find("NavigationLink").length).toEqual(1);
  });
});
