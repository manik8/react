import React from "react";

const Greet = (props) => {
  const { name, heroName, children } = props;
  return (
    <h1>
      Hello! {name}, {heroName}
      {children}
    </h1>
  );
};

export default Greet;
