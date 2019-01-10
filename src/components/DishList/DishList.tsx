import React, { Component } from "react";
import "./DishList.scss";

import DishListItem from "../DishListItem/DishListItem";

class DishList extends Component {
  render() {
    return (
      <div className="DishList">
        <DishListItem />
      </div>
    );
  }
}

export default DishList;
