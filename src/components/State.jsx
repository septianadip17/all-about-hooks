import React from "react";
import { useState } from "react";
import Buttons from "./Buttons";


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
  
  const changeBrand = () => {
    setCar((car)=> {
      return {...car, brand: "BMW"};
    })
  }

  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl">useState</h1>
      {/* Favorite color */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>My Favourite color is {color}</h1>
        <Buttons name="Change Color" onClick={changeColor}/>
      </div>

      <hr className=" border-2 border-green-500" />
      {/* Favorite car */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>My Favourite car is {car.brand}.</h1>
        <h2>It is a {car.model} from {car.year} with {car.color} color {car.brand}</h2>
        <Buttons name="Change Brand" onClick={changeBrand} />
      </div>

    </div>
  );
};

export default State;
