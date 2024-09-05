import React from "react";
import { useState } from "react";

const State = () => {
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };

  return (
    <div className="border-4 border-yellow-400">
      <h1 className="text-3xl">State</h1>
      <h1>My Favourite color is {color}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default State;
