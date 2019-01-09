import React, { Component } from "react";
import "./Notification.scss";

import Snackbar from "@material-ui/core/Snackbar";

import { observer, inject } from "mobx-react";
import { INotificationStore } from "../../stores/notificationStore";

interface NotificationProps {
  notificationStore?: INotificationStore;
}

interface NotificationState {
  open: boolean;
}

inject("notificationStore");
@observer
class Notification extends Component<NotificationProps, NotificationState> {
  state = {
    open: true
  };

  // this.setState({ open: true });

  componentDidUpdate(
    prevProps: NotificationProps,
    prevState: NotificationState
  ) {
    console.log("prevProps: ", prevProps, prevState);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default Notification;
