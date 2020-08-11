import React from "react";

const Greet = ({ name, heroName, children }) => {
  return (
    <h1>
      Hello! {name}, {heroName}
      {children}
    </h1>
  );
};

export default Greet;
