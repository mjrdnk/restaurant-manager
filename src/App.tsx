import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends Component {
  isAuthenticated: boolean = false;

  render() {
    return (
      <div className="App">{this.isAuthenticated ? <Home /> : <Login />}</div>
    );
  }
}

export default App;
