//import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const Alphabet = () => {
  const { letter, result } = useContext(Context);

  return (
    <div className="alphabet">
      {result ? <h3>" SUCCESS ! "</h3> : <h1>{letter}</h1>}
    </div>
  );
};
