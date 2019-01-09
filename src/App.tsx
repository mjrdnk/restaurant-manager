import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends Component {
  // isAuthenticated: boolean = false;
  // {this.isAuthenticated ? <Home /> : <Login />}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
