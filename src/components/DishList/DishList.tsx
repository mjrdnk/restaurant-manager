import React, { Component } from "react";
import "./DishList.scss";

import List from "@material-ui/core/List";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import DishListItem from "../DishListItem/DishListItem";

import { IDish } from "../../models";

interface IDishListProps {
  dishList: IDish[];
}

class DishList extends Component<IDishListProps> {
  render() {
    const { dishList } = this.props;
    return (
      <div className="DishList">
        <ErrorBoundary>
          <List>
            {dishList.map((dish, index) => (
              <DishListItem dish={dish} key={index} />
            ))}
          </List>
        </ErrorBoundary>
      </div>
    );
  }
}

export default DishList;
