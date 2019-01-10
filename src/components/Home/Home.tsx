import React, { Component } from "react";
import "./Home.scss";

import NavigationBar from "../NavigationBar/NavigationBar";
import HomeRouter from "../../routers/HomeRouter/HomeRouter";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavigationBar />
        <HomeRouter />
      </div>
    );
  }
}

export default Home;
