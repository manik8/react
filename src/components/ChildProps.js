import React, { Component } from "react";

export default class ChildProps extends Component {
  render() {
    return (
      <button onClick={this.props.triggerCount}>
        Click {this.props.count}
      </button>
    );
  }
}
