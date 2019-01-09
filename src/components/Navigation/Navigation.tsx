import React, { Component } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavLink className="Navigation-link" to="/home">
          Home
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
