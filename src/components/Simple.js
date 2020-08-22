import React, { Component } from "react";

export default class Simple extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.state.count = this.state.count + 1;
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click {count}</button>
      </div>
    );
  }
}
