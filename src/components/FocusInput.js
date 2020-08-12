import React, { Component } from "react";
import Input from "./Input";

export default class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = null;
    this.setcomponentRef = (element) => {
      this.componentRef = element;
    };
  }
  clickHandler = () => {
    this.componentRef.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.setcomponentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
