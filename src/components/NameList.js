import React from "react";
import Person from "./Person";

export default function NameList() {
  const names = ["Bruce", "Clark", "Myana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 40,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Myana",
      age: 30,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}
