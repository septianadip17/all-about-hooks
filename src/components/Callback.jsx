// useCallback dalam React adalah hook yang bertujuan untuk mengoptimalkan kinerja dengan mengurangi jumlah re-render yang tidak perlu pada komponen lain di dalamnya.

import React from "react";

const Callback = () => {
  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl text-start">useCallback</h1>
      Callback
    </div>
  );
};

export default Callback;
