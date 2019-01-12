import React, { Component } from "react";
import "./Home.scss";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomeRouter from "../../routers/HomeRouter/HomeRouter";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ErrorBoundary>
          <NavigationBar />
          <NavigationMenu />
          <HomeRouter />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
