import React from "react";
import { shallow } from "enzyme";
import { Provider } from "mobx-react";

import Notification from "./Notification";
import { stores } from "../../stores";

describe("Notification component", () => {
  const wrapper = shallow(
    <Provider {...stores}>
      <Notification />
    </Provider>
  );
  it("Should render <Notification/>.", () => {
    expect(wrapper).toBeTruthy();
  });
});
