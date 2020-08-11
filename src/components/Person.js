import React from "react";

export default function Person({ person }) {
  return (
    <div>
      <li>
        {person.name} {person.age} {person.skill}
      </li>
    </div>
  );
}
