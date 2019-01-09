import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  const wrapper = shallow(<App />);
  it("Should render <App/>.", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should contain <BrowserRouter/>.", () => {
    expect(wrapper.find(<BrowserRouter />)).toBeTruthy();
  });
});
