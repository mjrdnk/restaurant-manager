import React, { Component } from "react";
import "./NavigationMenuItem.scss";

import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";

interface INavigationMenuItemProps {
  title: string;
  path: string;
}

class NavigationMenuItem extends Component<INavigationMenuItemProps> {
  render() {
    const { title, path } = this.props;

    return (
      <div className="NavigationMenuItem">
        <Link to={path}>
          <Button className="NavigationMenuItem-Button" variant="contained">
            {title}
          </Button>
        </Link>
      </div>
    );
  }
}

export default NavigationMenuItem;
