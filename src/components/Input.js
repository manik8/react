import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  focusInput() {
    this.cbRef.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setcbRef} />
      </div>
    );
  }
}
