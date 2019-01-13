import React, { Component } from "react";
import "./NavigationBar.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

import { currentPath } from "../../helpers";
import Logout from "../Logout/Logout";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationLink from "../NavigationLink/NavigationLink";

interface NavigationBarProps {
  location?: any;
}

class NavigationBar extends Component<NavigationBarProps> {
  private get shouldRenderBackBtn(): boolean {
    return !!currentPath.isHomeSubroute();
  }

  render() {
    return (
      <div className="NavigationBar">
        <ErrorBoundary>
          <AppBar position="static">
            <Toolbar className="NavigationBar-Toolbar">
              {this.shouldRenderBackBtn ? (
                <NavigationLink to="/">
                  <Button variant="contained">
                    <Icon>arrow_back_ios</Icon>
                    Home
                  </Button>
                </NavigationLink>
              ) : null}
              <Typography variant="h6" color="inherit">
                Restaurant Manager
              </Typography>
              <Logout />
            </Toolbar>
          </AppBar>
        </ErrorBoundary>
      </div>
    );
  }
}

export default NavigationBar;
