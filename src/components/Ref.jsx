import React, { useEffect, useState, useRef } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="border-4 border-red-400  mx-auto p-5">
      <h1 className="text-3xl text-start">useRef</h1>
      <div className="flex flex-col gap-2 items-center justify-center m-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-2/3 border rounded p-2 text-black"
        />
        <h2 className="text-xl">My name is {name}</h2>
        <h2 className="text-xl">I rendered {renderCount.current} times</h2>
      </div>
      <hr className="border-2 border-green-500 my-4" />
      <div className="text-center">
        <h2>This is useRef</h2>
      </div>
      <hr className="border-2 border-green-500 my-4" />
      <div className="flex gap-2 text-center items-center justify-center m-2">
        <p className="w-2/3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi
          maxime harum, commodi mollitia corrupti ea sunt aspernatur illum
          perferendis nisi quas porro nam ipsum, deleniti et asperiores,
          consectetur facere officiis ullam. Dolorum, totam, deserunt aut
          consequuntur blanditiis amet repellendus deleniti quidem ut delectus
          voluptate error ipsam perferendis assumenda iste mollitia vitae?
          Aperiam, laudantium libero saepe consequatur voluptatem incidunt vero,
          possimus dolor illo quas iusto qui cum suscipit ipsum doloribus
          obcaecati, praesentium dolorem fugiat exercitationem.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://reactjs.org"
          className="border-2 border-blue-600 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default Ref;
