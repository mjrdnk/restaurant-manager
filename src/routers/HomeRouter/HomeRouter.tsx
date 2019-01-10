import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DishList from "../../components/DishList/DishList";
import TableArranger from "../../components/TableArranger/TableArranger";
import NotFound from "../../components/NotFound/NotFound";

class HomeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home/kitchen-orders" component={DishList} />
        <Route path="/home/tables-arrangement" component={TableArranger} />
      </Switch>
    );
  }
}

export default HomeRouter;
