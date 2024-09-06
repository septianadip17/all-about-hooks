import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("GreatStack");

  useEffect(() =>{
    setTimeout(() =>{
      setCount(count => count + 1);
    }, 2000)
  }, [count, name])

  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container">
      <h1 className="text-3xl">useEffect</h1>
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>I've rendered {count} times</h1>
      </div>
    </div>
  );
};

export default Effect;
