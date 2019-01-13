import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";

import "./Logout.scss";
import { IAuthStore } from "../../stores/authStore";
import { messages } from "../../config";
import { INotificationStore } from "../../stores/notificationStore";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface ILogoutProps {
  authStore?: IAuthStore;
  notificationStore?: INotificationStore;
}

@inject("notificationStore")
@inject("authStore")
@observer
class Logout extends Component<ILogoutProps> {
  render() {
    return (
      <ErrorBoundary>
        <Button
          onClick={this.logoutHandler}
          variant="contained"
          color="secondary"
        >
          Log out
        </Button>
      </ErrorBoundary>
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
