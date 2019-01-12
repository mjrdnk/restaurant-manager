import React, { Component } from "react";
import "./DishList.scss";

import DishListItem from "../DishListItem/DishListItem";
import { IDish } from "../../models";
import { fakeDishesList } from "../../mocks";

import List from "@material-ui/core/List";

class DishList extends Component {
  dishes: IDish[] = fakeDishesList;

  render() {
    return (
      <List>
        {this.dishes.map((dish, index) => (
          <DishListItem dish={dish} key={index} />
        ))}
      </List>
    );
  }
}

export default DishList;
