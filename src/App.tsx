import React, { Component } from "react";
import "./App.scss";

import MainRouter from "./routers/MainRouter/MainRouter";
import Notification from "./components/Notification/Notification";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <MainRouter />
        </div>

        <Notification />
      </div>
    );
  }
}

export default App;
