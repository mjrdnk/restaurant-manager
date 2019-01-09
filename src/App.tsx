import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { observer, inject } from "mobx-react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Notification from "./components/Notification/Notification";

import { IAuthStore } from "./stores/authStore";

interface AppProps {
  authStore?: IAuthStore;
}

@inject("authStore")
@observer
class App extends Component<AppProps> {
  render() {
    const { isAuthenticated } = this.props.authStore!;

    return (
      <div>
        <Notification />
        <Router>
          <div className="App">
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
                render={() =>
                  isAuthenticated ? <Home /> : <Redirect to="/" />
                }
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
