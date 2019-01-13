import React, { Component } from "react";
import "./NavigationLink.scss";

import { Link } from "react-router-dom";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface NavigationLinkProps {
  to: string;
  children?: any;
}

class NavigationLink extends Component<NavigationLinkProps> {
  render() {
    const { to, children } = this.props;

    return (
      <ErrorBoundary>
        <Link className="NavigationLink" to={to}>
          {children}
        </Link>
      </ErrorBoundary>
    );
  }
}

export default NavigationLink;
