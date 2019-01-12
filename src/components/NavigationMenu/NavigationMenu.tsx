import React, { Component } from "react";
import "./NavigationMenu.scss";

import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { currentPath } from "../../helpers";

interface INavigationMenuState {
  shouldRenderMenu?: boolean;
}

class NavigationMenu extends Component<INavigationMenuState> {
  private get shouldRenderMenu(): boolean {
    return !currentPath.isHomeSubroute();
  }

  render() {
    return (
      <ErrorBoundary>
        {this.shouldRenderMenu ? (
          <div className="NavigationMenu">
            <NavigationMenuItem
              title="Kitchen orders"
              path="/home/kitchen-orders"
            />
            <NavigationMenuItem
              disabled
              title="Tables arrangement"
              path="/home/tables-arrangement"
            />
          </div>
        ) : null}
      </ErrorBoundary>
    );
  }
}

export default NavigationMenu;
