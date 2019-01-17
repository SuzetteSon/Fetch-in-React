import React, { Component } from "react";

class LoadingSpinner extends Component {
  render() {
    return (
      <div className="lds-heart">
        <div>Loading...</div>
      </div>
    );
  }
}

export default LoadingSpinner;
