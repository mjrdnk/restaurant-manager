import React, { Component } from "react";
import "./App.scss";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import MainRouter from "./routers/MainRouter/MainRouter";
import Notification from "./components/Notification/Notification";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <MainRouter />
          <Notification />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
