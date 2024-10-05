import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border-4 border-yellow-400 w-screen mx-auto container p-8 flex flex-col items-center">
      <p className="text-2xl font-semibold mb-4">Count: {state.count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Reducer;
