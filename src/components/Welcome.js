import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <h1>
        {this.props.name} and {this.props.heroName}
      </h1>
    );
  }
}
