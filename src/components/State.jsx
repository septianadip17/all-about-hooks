import React from "react";
import { useState } from "react";

const State = () => {
  // change color
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };

  // change car brand
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  });

  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl">useState</h1>
      {/* Favorite color */}
      <div className="flex gap-2 items-center justify-center ">
        <h1>My Favourite color is {color}</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={changeColor}
        >
          Change Color
        </button>
      </div>

      <hr className=" border-2 border-green-500" />
    </div>
  );
};

export default State;
