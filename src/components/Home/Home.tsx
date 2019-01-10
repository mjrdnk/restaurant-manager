import React, { Component } from "react";
import "./Home.scss";
import { Route, Redirect } from "react-router-dom";

import DishList from "../DishList/DishList";
import NavigationBar from "../NavigationBar/NavigationBar";

import { observer, inject } from "mobx-react";
import { IAuthStore } from "../../stores/authStore";

interface LoginProps {
  authStore?: IAuthStore;
}

@inject("authStore")
@observer
class Home extends Component<LoginProps> {
  render() {
    const { isAuthenticated } = this.props.authStore!;

    return (
      <div className="Home">
        <NavigationBar />

        <Route
          exact
          strict
          path="/kitchen-orders"
          render={() => (isAuthenticated ? <DishList /> : <Redirect to="/" />)}
        />
        {/* 
<Route
          exact
          strict
          path={`/home/kitchen-orders`}
          render={() => (isAuthenticated ? <DishList /> : <Redirect to="/" />)}
        /> */}
      </div>
    );
  }
}

export default Home;
