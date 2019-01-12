import React, { Component } from "react";
import "./NavigationBar.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Logout from "../Logout/Logout";

import { currentPath } from "../../helpers";

interface NavigationBarProps {
  location?: any;
}

class NavigationBar extends Component<NavigationBarProps> {
  get shouldRenderBackBtn(): boolean {
    return !!currentPath.isHomeSubroute();
  }

  render() {
    return (
      <div className="NavigationBar">
        <AppBar position="static">
          <Toolbar className="NavigationBar-Toolbar">
            {this.shouldRenderBackBtn ? <Link to="/">Home</Link> : null}
            <Typography variant="h6" color="inherit">
              Restaurant Manager
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationBar;
