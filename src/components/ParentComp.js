import React, { Component, PureComponent } from "react";
import RegCom from "./RegCom";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Manik",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Manik",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegCom name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
