import React from "react";
import { shallow } from "enzyme";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary component", () => {
  const wrapper = shallow(<ErrorBoundary />);

  it("Should render <ErrorBoundary/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should display generic text on error.", () => {
    wrapper.setState({ hasError: true });
    expect(wrapper.find("span").length).toBe(1);
  });
});
