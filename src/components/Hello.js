import React from "react";

const Hello = () => {
  //   return <h1>HEllo Manik</h1>;

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Manik")
  );
};

export default Hello;
