import React, { Component } from "react";
import "./Logout.scss";

import Button from "@material-ui/core/Button";

import { observer, inject } from "mobx-react";
import { IAuthStore } from "../../stores/authStore";
import { INotificationStore } from "../../stores/notificationStore";

import { messages } from "../../config";

interface LogoutProps {
  authStore?: IAuthStore;
  notificationStore?: INotificationStore;
}

@inject("notificationStore")
@inject("authStore")
@observer
class Logout extends Component<LogoutProps> {
  render() {
    return (
      <Button
        onClick={this.logoutHandler}
        variant="contained"
        color="secondary"
      >
        Log out
      </Button>
    );
  }

  private logoutHandler = (): void => {
    const { authenticate } = this.props.authStore!;
    authenticate(false);

    this.sendMessage(messages.LOGOUT.SUCCESS);
  };

  private sendMessage(message: string): void {
    const { notify } = this.props.notificationStore!;
    notify(message);
  }
}

export default Logout;
