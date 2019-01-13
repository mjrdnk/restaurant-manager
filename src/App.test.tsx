import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Notification from "./components/Notification/Notification";

describe("App component", () => {
  const wrapper = shallow(<App />);
  it("Should render <App/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should contain <BrowserRouter/>.", () => {
    expect(wrapper.find(<BrowserRouter />)).toBeTruthy();
  });

  it("Should contain <ErrorBoundary/>.", () => {
    expect(wrapper.find(<ErrorBoundary />)).toBeTruthy();
  });

  it("Should contain <Notification/>.", () => {
    expect(wrapper.find(<Notification />)).toBeTruthy();
  });
});
