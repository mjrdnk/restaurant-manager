import React, { Component } from "react";
import "./NavigationBar.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Logout from "../Logout/Logout";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <AppBar position="static">
          <Toolbar className="NavigationBar-Toolbar">
            <Typography variant="h6" color="inherit">
              Restaurant Manager
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>

        <NavigationMenu />
      </div>
    );
  }
}

export default NavigationBar;
