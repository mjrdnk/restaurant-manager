import React, { Component } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class TableArranger extends Component {
  render() {
    return (
      <div className="TableArranger">
        <ErrorBoundary>
          <span>Table arranger: Work in progress.</span>
        </ErrorBoundary>
      </div>
    );
  }
}

export default TableArranger;
