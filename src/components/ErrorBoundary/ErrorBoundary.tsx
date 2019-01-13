import React, { Component } from "react";

import "./ErrorBoundary.scss";

interface IErrorBoundaryProps {
  children?: any;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });

    // This could log to sentry or another error reporting tool
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
