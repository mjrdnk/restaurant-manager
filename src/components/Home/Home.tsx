import React, { Component } from "react";
import "./Home.scss";

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
        <NavigationBar />
        {this.shouldRenderMenu ? <NavigationMenu /> : null}
        <HomeRouter />
      </div>
    );
  }
}

export default Home;
