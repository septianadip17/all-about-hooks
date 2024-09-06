/* eslint-disable react/prop-types */
import React from "react";

const Buttons = ({ name, action }) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={action}
    >
      {name}
    </button>
  );
};

export default Buttons;
