import React, { Component } from "react";
import Button from "@material-ui/core/Button/Button";

import "./NavigationMenuItem.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationLink from "../NavigationLink/NavigationLink";

interface INavigationMenuItemProps {
  title: string;
  path: string;
  disabled?: boolean;
}

class NavigationMenuItem extends Component<INavigationMenuItemProps> {
  render() {
    const { title, path, disabled } = this.props;

    return (
      <div className="NavigationMenuItem">
        <ErrorBoundary>
          {disabled ? (
            <Button
              className="NavigationMenuItem-Button"
              variant="contained"
              disabled
            >
              {title}
            </Button>
          ) : (
            <NavigationLink to={path}>
              <Button className="NavigationMenuItem-Button" variant="contained">
                {title}
              </Button>
            </NavigationLink>
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default NavigationMenuItem;
