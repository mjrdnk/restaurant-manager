import React from "react";
import { shallow } from "enzyme";
import { Provider } from "mobx-react";

import Login from "./Login";
import { stores } from "../../stores";

describe("Login component", () => {
  const wrapper = shallow(
    <Provider {...stores}>
      <Login />
    </Provider>
  );

  it("Should render <Login/>.", () => {
    expect(wrapper).toBeTruthy();
  });
});
