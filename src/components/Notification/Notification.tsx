import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { observer, inject } from "mobx-react";

import "./Notification.scss";
import { INotificationStore } from "../../stores/notificationStore";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface INotificationProps {
  notificationStore?: INotificationStore;
}

interface INotificationState {
  open: boolean;
  message: string;
}

@inject("notificationStore")
@observer
class Notification extends Component<INotificationProps, INotificationState> {
  state: INotificationState = {
    open: false,
    message: ""
  };

  componentDidUpdate(prevProps: INotificationProps) {
    const { message } = prevProps.notificationStore!;

    if (message && this.state.message !== message) {
      this.setState({ open: true, message });
    }
  }

  render() {
    const { open } = this.state;
    const { message } = this.props.notificationStore!;

    return (
      <ErrorBoundary>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </ErrorBoundary>
    );
  }

  handleClose = () => {
    this.setState({ open: false });
  };
}

export default Notification;
