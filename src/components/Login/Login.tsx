import React, { Component } from "react";
import "./Login.scss";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import { observer, inject } from "mobx-react";
import { IAuthStore, AuthStore } from "../../stores/authStore";
import { verySecretConfig } from "../../config";

interface LoginProps {
  authStore?: IAuthStore;
}

interface LoginState {
  username: string;
  password: string;
}

@inject("authStore")
@observer
class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      password: "",
      username: ""
    };
  }

  render() {
    return (
      <div className="Login">
        <span>
          Please login with your username and password ({this.state.password})
        </span>

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
  ) {
    this.setState({ username: event.target.value });
  }

  private setPassword(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({ password: event.target.value });
  }

  private loginHandler = () => {
    const { authenticate } = this.props.authStore!;
    authenticate(this.userExists);
  };

  get userExists(): boolean {
    return (
      this.state.username === verySecretConfig.USERNAME &&
      this.state.password === verySecretConfig.PASSWORD
    );
  }
}

export default Login;
