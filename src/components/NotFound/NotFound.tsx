import React, { Component } from "react";
import "./NotFound.css";
import { Button } from "@material-ui/core";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <span>Ooops.. Page has not been found!</span>
        <Button>Go back home</Button>
      </div>
    );
  }
}

export default NotFound;
