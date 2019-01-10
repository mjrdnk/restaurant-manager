import React, { Component } from "react";
import "./Login.scss";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import { observer, inject } from "mobx-react";
import { IAuthStore } from "../../stores/authStore";
import { INotificationStore } from "../../stores/notificationStore";

import { verySecretConfig } from "../../config";

interface LoginProps {
  authStore?: IAuthStore;
  notificationStore?: INotificationStore;
}

interface LoginState {
  username: string;
  password: string;
}

@inject("notificationStore")
@inject("authStore")
@observer
class Login extends Component<LoginProps, LoginState> {
  state = {
    password: "",
    username: ""
  };

  render() {
    return (
      <div className="Login">
        <span>Please login with your username and password</span>

        <Input
          type="username"
          name="username"
          placeholder="username..."
          onChange={e => this.setUsername(e)}
          value={this.state.username}
        />
        <Input
          type="password"
          name="password"
          placeholder="password..."
          onChange={e => this.setPassword(e)}
          value={this.state.password}
        />
        <Button variant="contained" color="primary" onClick={this.loginHandler}>
          Log in
        </Button>
      </div>
    );
  }

  private setUsername(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    this.setState({ username: event.target.value });
  }

  private setPassword(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    this.setState({ password: event.target.value });
  }

  private loginHandler = (): void => {
    this.userExists ? this.handleLoginSuccess() : this.handleLoginError();
  };

  private get userExists(): boolean {
    return (
      this.state.username === verySecretConfig.USERNAME &&
      this.state.password === verySecretConfig.PASSWORD
    );
  }

  private handleLoginError() {
    this.sendMessage("Wrong username or password.");
  }

  private handleLoginSuccess() {
    const { authenticate } = this.props.authStore!;

    authenticate(this.userExists);
    this.sendMessage("Successfuly logged in!");
  }

  private sendMessage(message: string): void {
    const { notify } = this.props.notificationStore!;
    notify(message);
  }
}

export default Login;
