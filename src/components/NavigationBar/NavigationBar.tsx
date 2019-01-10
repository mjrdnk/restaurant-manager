import React, { Component } from "react";
import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import Logout from "../Logout/Logout";

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <AppBar position="static">
          <Toolbar className="NavigationBar-Toolbar">
            <IconButton color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Restaurant Manager
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>

        {/* <NavLink className="NavigationBar-link" to="/home">
          Home
        </NavLink>
        <NavLink className="NavigationBar-link" to="/kitchen-orders">
          Kitchen Orders
        </NavLink> */}
      </div>
    );
  }
}

export default NavigationBar;
