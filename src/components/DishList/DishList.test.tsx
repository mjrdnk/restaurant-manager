import React from "react";
import { shallow } from "enzyme";
import DishList from "./DishList";
import { dishList } from "../../mocks";

describe("DishList component", () => {
  const dishes = JSON.parse(dishList);
  const wrapper = shallow(<DishList dishList={dishes} />);

  it("Should render <DishList/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);

    // mock data has length 3
    expect(wrapper.find("DishListItem").length).toBe(3);
  });
});
