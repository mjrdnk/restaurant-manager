import React, { Component } from "react";
import "./Home.scss";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomeRouter from "../../routers/HomeRouter/HomeRouter";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

import { currentPath } from "../../helpers";

class Home extends Component {
  get shouldRenderMenu(): boolean {
    return !currentPath.isHomeSubroute();
  }

  render() {
    return (
      <div className="Home">
        <ErrorBoundary>
          <NavigationBar />
          {this.shouldRenderMenu ? <NavigationMenu /> : null}
          <HomeRouter />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
