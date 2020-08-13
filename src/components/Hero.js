import React from "react";

export default function Hero({ heroName }) {
  if (heroName === "joker") {
    throw new Error("Not a Hero");
  }
  return <div>{heroName}</div>;
}
