import React, { Component } from "react";
import FRInput from "./FRInput";

export default class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  clickHandler = () => {
    this.cbRef.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
