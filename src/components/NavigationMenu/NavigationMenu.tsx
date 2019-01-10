import React, { Component } from "react";
import "./NavigationMenu.scss";

import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";

class NavigationMenu extends Component {
  render() {
    return (
      <div className="NavigationMenu">
        <NavigationMenuItem
          title="Kitchen orders"
          path="/home/kitchen-orders"
        />
        <NavigationMenuItem
          title="Tables arrangement"
          path="/home/tables-arrangement"
        />
      </div>
    );
  }
}

export default NavigationMenu;
