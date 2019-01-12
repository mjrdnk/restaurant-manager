import React from "react";
import { shallow } from "enzyme";
import DishList from "./DishList";
import { fakeDishesList } from "../../mocks";

describe("DishList component", () => {
  const dishes = JSON.parse(fakeDishesList);
  const wrapper = shallow(<DishList dishes={dishes} />);
  it("Should render <DishList/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);

    // after loading 1000 fake dishes
    expect(wrapper.find("DishListItem").length).toBeGreaterThan(0);
    expect(wrapper.find("DishListItem").length).toBeLessThan(1001);
  });
});
