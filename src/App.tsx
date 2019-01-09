import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  // isAuthenticated: boolean = false;
  // {this.isAuthenticated ? <Home /> : <Login />}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
