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
      <div className="DishList">
        <List>
          {this.dishes.map((dish, index) => (
            <DishListItem dish={dish} key={index} />
          ))}
        </List>
      </div>
    );
  }
}

export default DishList;
