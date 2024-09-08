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
    setCar((car) => {
      return { ...car, brand: "BMW" };
    });
  };

  // counter
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  // pacar
  const [pacarSaya, setPacarSaya] = useState(1);

  return (
    <div className="border-4 border-yellow-400 container p-5">
      <h1 className="text-3xl">useState</h1>
      {/* Favorite color */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>My Favourite color is {color}</h1>
        <Buttons name="Change Color" onClick={changeColor} />
      </div>

      <hr className=" border-2 border-green-500" />

      {/* Favorite car */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>My Favourite car is {car.brand}.</h1>
        <h2>
          It is a {car.model} from {car.year} with {car.color} color {car.brand}
        </h2>
        <Buttons name="Change Brand" onClick={changeBrand} />
      </div>

      <hr className="border-2 border-green-500" />

      {/* Counter */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>Counter: {count}</h1>
        <Buttons name="Increase Count" onClick={increaseCount} />
      </div>

      <hr className="border-2 border-green-500" />

      {/* Pacar */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>saya memiliki: {pacarSaya} pacar</h1>
        <Buttons
          onClick={() => setPacarSaya((prev) => prev + 1)}
          name="tambah pacar"
        />
        <Buttons
          onClick={() => setPacarSaya((prev) => prev - 1)}
          name="putuskan pacar"
        />
      </div>
    </div>
  );
};

export default State;
