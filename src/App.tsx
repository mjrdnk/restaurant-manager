import React, { Component } from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  // isAuthenticated should be retrieved from localstorage
  isAuthenticated: boolean = false;

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  this.isAuthenticated ? <Redirect to="/home" /> : <Login />
                }
              />
              <Route
                path="/home"
                render={() =>
                  this.isAuthenticated ? <Home /> : <Redirect to="/" />
                }
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
