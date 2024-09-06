import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("GreatStack");

  // pacar
  const [pacarSaya, setPacarSaya] = useState(1);
  const [namaPacar, setNamaPacar] = useState("");

  // counter
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count, name]);

  // // alert hehe
  // useEffect(() => {
  //   alert("Halo hehee");
  // }, []); // [] -> hanya dijalankan sekali

  // perubahan nama pacar sesuai kondisi
  useEffect(() => {
    setNamaPacar("Jodi");
  }, [pacarSaya]);

  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("Jodi");
    } else {
      setNamaPacar("Uhuy");
    }
  }, [pacarSaya]);

  return (
    <div className="border-4 border-red-400 w-screen mx-auto container p-5">
      <h1 className="text-3xl">useEffect</h1>

      {/*  */}
      <div className="flex gap-2 items-center justify-center m-2">
        <h1>I've rendered {count} times</h1>
      </div>

      <hr className="border-2 border-green-500" />

      {/* Pacar */}
      <div className="flex flex-col gap-2 items-center justify-center m-2">
        <h5>nama pacar: {namaPacar}</h5>
        <h1>saya memiliki: {pacarSaya} pacar</h1>
        <div className="flex gap-2">
          <Buttons
            onClick={() => setPacarSaya((prev) => prev + 1)}
            name="tambah pacar"
          />
          <Buttons
            onClick={() => setPacarSaya((prev) => prev - 1)}
            name="putuskan pacar"
          />
        </div>
      </div>
    </div>
  );
};

export default Effect;
