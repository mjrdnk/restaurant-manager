import React, { Component } from "react";
import "./Login.scss";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <span>Please login with your username (your email) and password</span>

        <Input type="email" name="email" placeholder="email..." />
        <Input type="password" name="password" placeholder="password..." />
        <Button variant="contained" color="primary">
          Log in
        </Button>
      </div>
    );
  }
}

export default Login;
