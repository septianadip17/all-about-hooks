/* eslint-disable react-refresh/only-export-components */
import React from "react";

const Header = () => {
  console.log("Header rendered");
  return <div className="text-3xl font-bold">Header</div>;
};

export default React.memo(Header);
