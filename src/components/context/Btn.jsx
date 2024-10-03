import React, { useContext } from "react";
import { Context } from "./Context";

const Btn = () => {
  const [signedIn, setSignedIn] = useContext(Context);

  return (
    <div
      onClick={() => setSignedIn(!signedIn)}
      className={`px-6 py-3 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-300 ${
        signedIn
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
      }`}
    >
      {signedIn ? "Sign Out" : "Sign In"}
    </div>
  );
};

export default Btn;
