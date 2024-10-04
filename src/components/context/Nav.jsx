import React from "react";
import Btn from "./Btn";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-lg font-bold">My App</div>
      <div>
        <Btn />
      </div>
    </nav>
  );
};

export default Nav;
