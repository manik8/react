import React, { Component } from "react";
import ChildProps from "./ChildProps";

export default class ParentProp extends Component {
  state = {
    count: 0,
  };
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        {this.state.count}
        <ChildProps triggerCount={this.handleCount} />
      </div>
    );
  }
}
