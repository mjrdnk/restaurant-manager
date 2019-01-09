import React, { Component } from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <span>Ooops.. Page has not been found!</span>
        <NavLink to="/home">Go back Home</NavLink>
      </div>
    );
  }
}

export default NotFound;
