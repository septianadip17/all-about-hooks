import React, { useState } from "react";
import Nav from "./Nav";

export const Context = React.createContext();

const FirstContext = () => {
  // Renamed to start with uppercase
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
        <h1 className="text-3xl text-start">useContext</h1>
        <Nav />
        <h1>{signedIn ? "Signed In" : "Signed Out"}</h1>
      </div>
    </Context.Provider>
  );
};

export default FirstContext;
