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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, veniam
          vero? Fugit delectus enim magnam. Ratione harum temporibus natus, sed
          inventore dignissimos iusto doloribus tempora delectus quisquam earum
          enim quo, expedita asperiores tempore molestiae cumque commodi
          corporis animi ullam. Magni eos consequatur, alias sapiente expedita
          et ipsum perferendis odio quae.
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
