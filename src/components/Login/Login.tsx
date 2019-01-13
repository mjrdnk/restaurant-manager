import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import "./Login.scss";
import { IAuthStore } from "../../stores/authStore";
import { INotificationStore } from "../../stores/notificationStore";
import { verySecretConfig, messages } from "../../config";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface ILoginProps {
  authStore?: IAuthStore;
  notificationStore?: INotificationStore;
}

interface ILoginState {
  username: string;
  password: string;
}

@inject("notificationStore")
@inject("authStore")
@observer
class Login extends Component<ILoginProps, ILoginState> {
  state: ILoginState = {
    password: "",
    username: ""
  };

  render() {
    return (
      <div className="Login">
        <ErrorBoundary>
          <div className="Login-group">
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
            <Button
              variant="contained"
              color="primary"
              onClick={this.loginHandler}
            >
              Log in
            </Button>
          </div>
        </ErrorBoundary>
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

  private handleLoginError(): void {
    this.sendMessage(messages.LOGIN.ERROR);
  }

  private handleLoginSuccess(): void {
    const { authenticate } = this.props.authStore!;

    authenticate(this.userExists);
    this.sendMessage(messages.LOGIN.SUCCESS);
  }

  private sendMessage(message: string): void {
    const { notify } = this.props.notificationStore!;
    notify(message);
  }
}

export default Login;
