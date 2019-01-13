import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DishListContainer from "../../components/DishList/DishList.container";
import TableArranger from "../../components/TableArranger/TableArranger";

class HomeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home/kitchen-orders" component={DishListContainer} />
        <Route path="/home/tables-arrangement" component={TableArranger} />
      </Switch>
    );
  }
}

export default HomeRouter;
