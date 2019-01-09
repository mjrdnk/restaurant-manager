import React, { Component } from "react";
import "./Home.scss";
import { Route, Redirect } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import DishList from "../DishList/DishList";

// interface Props {
//   // https://reacttraining.com/react-router/web/api/match
//   match: {
//     params: any;
//     isExact: boolean;
//     path: string;
//     url: string;
//   };
// }

class Home extends Component {
  // isAuthenticated should be retrieved from localstorage
  isAuthenticated: boolean = true;

  render() {
    return (
      <div className="Home">
        <Navigation />
        <span>Restaurant manager</span>

        <Route
          exact
          strict
          path={`/home/kitchen-orders`}
          render={() =>
            this.isAuthenticated ? <DishList /> : <Redirect to="/" />
          }
        />
      </div>
    );
  }
}

export default Home;
