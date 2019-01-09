import React from "react";
import { Redirect } from "react-router-dom";

const NotFound = () => {
  // maybe move this logic to render of Route in App.tsx
  // if authentication state will be lost after reload
  return <Redirect to="/" />;
};

export default NotFound;
