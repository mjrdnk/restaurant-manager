import React, { Component } from "react";
import "./NavigationMenuItem.scss";

import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";

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
        {disabled ? (
          <Button
            className="NavigationMenuItem-Button"
            variant="contained"
            disabled
          >
            {title}
          </Button>
        ) : (
          <Link to={path}>
            <Button className="NavigationMenuItem-Button" variant="contained">
              {title}
            </Button>
          </Link>
        )}
      </div>
    );
  }
}

export default NavigationMenuItem;
