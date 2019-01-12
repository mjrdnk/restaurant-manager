import React from "react";
import { shallow } from "enzyme";
import DishList from "./DishList";
import { fakeDishesList } from "../../mocks";

describe("DishList component", () => {
  const wrapper = shallow(<DishList dishes={fakeDishesList} />);
  it("Should render <DishList/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
    expect(wrapper.find("DishListItem").length).toBeGreaterThan(0);
    expect(wrapper.find("DishListItem").length).toBeLessThan(1001);
  });
});
