import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl text-start">useMemo</h1>
      <div className="flex flex-col gap-2 items-center justify-center m-2">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
          className="w-2/3 border rounded p-2 text-black"
        />
        <h1 className="text-5xl">Cube of the number: {result}</h1>
      </div>
    </div>
  );
};

export default Memo;
