import React from "react";
import { shallow } from "enzyme";

import NotFound from "./NotFound";

describe("NotFound component", () => {
  const wrapper = shallow(<NotFound />);
  it("Should render <NotFound/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render Redirect component.", () => {
    expect(wrapper.find("Redirect").length).toEqual(1);
  });
});
