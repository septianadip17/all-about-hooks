// useCallback dalam React adalah hook yang bertujuan untuk mengoptimalkan kinerja dengan mengurangi jumlah re-render yang tidak perlu pada komponen lain di dalamnya.

import React, { useCallback, useState } from "react";
import Header from "./Header";
import Buttons from "./Buttons";

const Callback = () => {
  const [count, setCount] = useState(0);

  const newFunc = useCallback(() => {}, []);

  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl text-start">useCallback</h1>
      <div className="flex flex-col gap-2 items-center justify-center m-2">
        <Header newFunc={newFunc} />
        <h1 className="text-5xl font-bold m-3">{count}</h1>
        <Buttons
          name="Click Here"
          onClick={() => setCount((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};

export default Callback;
