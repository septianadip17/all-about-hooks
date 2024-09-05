import Callback from "./components/Callback";
import Context from "./components/Context";
import Custom from "./components/Custom";
import Effect from "./components/Effect";
import LayoutEffect from "./components/LayoutEffect";
import Memo from "./components/Memo";
import Reducer from "./components/Reducer";
import Ref from "./components/Ref";
import State from "./components/State";

const App = () => {
  return (
    <div className=" justify-center items-center grid space-y-5 mt-20 ">
      <h1 className=" text-purple-500 text-5xl font-bold ">
        Hello, this is all about hooks
      </h1>
      <hr className=" border-purple-500" />
      <div className=" grid grid-cols-3 gap-5">
        <State />
        <Effect />
        <Ref />
        <Memo />
        <Callback />
        <Context />
        <Reducer />
        <LayoutEffect />
        <Custom />
      </div>
    </div>
  );
};

export default App;
