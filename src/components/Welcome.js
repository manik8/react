import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <h1>
        {name} and {heroName}
      </h1>
    );
  }
}
