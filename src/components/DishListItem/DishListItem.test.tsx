import React from "react";
import { shallow } from "enzyme";
import DishListItem from "./DishListItem";
import { dishList } from "../../mocks";

describe("DishListItem component", () => {
  const dishes = JSON.parse(dishList);
  const aDish = dishes[0];
  const wrapper = shallow(<DishListItem dish={aDish} />);

  it("Should render <DishListItem/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should render nested components.", () => {
    expect(wrapper.find("ErrorBoundary").length).toEqual(1);
  });
});
