import React from "react";
import { shallow } from "enzyme";
import { Provider } from "mobx-react";

import Logout from "./Logout";
import { stores } from "../../stores";

describe("Logout component", () => {
  const wrapper = shallow(
    <Provider {...stores}>
      <Logout />
    </Provider>
  );

  it("Should render <Logout/>.", () => {
    expect(wrapper).toBeTruthy();
  });
});
