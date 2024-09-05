import State from "./components/State";

const App = () => {
  return (
    <div className=" justify-center items-center grid space-y-5 mt-20 ">
      <h1 className=" text-purple-500 text-5xl font-bold ">
        Hello, this is all about hooks
      </h1>
      <hr className=" border-purple-500"/>
      <div className=" grid grid-cols-3 gap-5">

      <State />
      </div>
    </div>
  );
};

export default App;
