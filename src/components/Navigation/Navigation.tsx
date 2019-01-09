import React, { Component } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavLink to="/home">Home</NavLink>
      </div>
    );
  }
}

export default Navigation;
