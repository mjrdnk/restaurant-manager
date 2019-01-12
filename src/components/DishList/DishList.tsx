import React, { Component } from "react";
import "./DishList.scss";

import List from "@material-ui/core/List";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import DishListItem from "../DishListItem/DishListItem";

import { IDish } from "../../models";

import { fakeDishesList } from "../../mocks";

interface IDishListState {
  dishes: IDish[];
}

class DishList extends Component<IDishListState> {
  state: IDishListState = {
    dishes: []
  };

  componentDidMount() {
    this.setState({ dishes: fakeDishesList });
  }

  render() {
    const { dishes } = this.state;

    return (
      <div className="DishList">
        <ErrorBoundary>
          <List>
            {dishes.map((dish, index) => (
              <DishListItem dish={dish} key={index} />
            ))}
          </List>
        </ErrorBoundary>
      </div>
    );
  }
}

export default DishList;
