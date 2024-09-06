import React, { useEffect, useState, useRef } from "react";

const Ref = () => {
  return (
    <div className="border-4 border-red-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl">useRef</h1>
      <div className='className="flex gap-2 text-center items-center justify-center m-2'>
        <h1>This is useRef</h1>
      </div>
      <hr className="border-2 border-green-500" />
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
      <div className="flex items-center">
        <a
          href="https://reactjs.org"
          className="border-2 border-blue-600 mx-auto"
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
