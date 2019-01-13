import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { observer, inject } from "mobx-react";

import Login from "../../components/Login/Login";
import Home from "../../components/Home/Home";
import NotFound from "../../components/NotFound/NotFound";
import { IAuthStore } from "../../stores/authStore";

interface MainRouterProps {
  authStore?: IAuthStore;
}

@inject("authStore")
@observer
class MainRouter extends Component<MainRouterProps> {
  render() {
    const { isAuthenticated } = this.props.authStore!;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? <Redirect to="/home" /> : <Login />
            }
          />
          <Route
            path="/home"
            render={() => (isAuthenticated ? <Home /> : <Redirect to="/" />)}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default MainRouter;
