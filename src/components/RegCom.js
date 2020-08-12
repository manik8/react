import React, { Component } from "react";

export default class RegCom extends Component {
  render() {
    console.log("Regular Component");
    return <div>Regular Component {this.props.name}</div>;
  }
}
