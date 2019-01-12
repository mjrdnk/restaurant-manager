import React, { Component } from "react";
import "./Notification.scss";

import Snackbar from "@material-ui/core/Snackbar";

import { observer, inject } from "mobx-react";
import { INotificationStore } from "../../stores/notificationStore";

interface INotificationProps {
  notificationStore?: INotificationStore;
}

interface INotificationState {
  open: boolean;
}

@inject("notificationStore")
@observer
class Notification extends Component<INotificationProps, INotificationState> {
  state = {
    open: false
  };

  render() {
    const { open } = this.state;
    const { message } = this.props.notificationStore!;

    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }

  handleClose = () => {
    this.setState({ open: false });
  };
}

export default Notification;
