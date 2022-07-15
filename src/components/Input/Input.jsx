import { useContext, useState } from "react";
import { Context } from "../Contexts/Context";

export const Input = () => {
  const { setResult, setTimer, setOnTimer, letter, randomAlphabet } =
    useContext(Context);
  const [count, setCount] = useState(0);
  console.log(count);

  function handleInput(e) {
    if (e.key !== letter) {
      setTimer((prev) => prev + 500);
    }
    if (count <= 20) {
      console.log(e.key);
      setCount((prev) => prev + 1);
      setOnTimer(true);
      randomAlphabet();
    } else {
      setOnTimer(false);
      setResult(true);
      document.querySelector(".input").disabled = true;
    }
  }
  return (
    <div>
      <input
        onKeyPress={handleInput}
        className="input"
        type="text"
        placeholder="Type Here"
      />
      <button
        onClick={() => {
          setTimer(0);
          setOnTimer(false);
          setCount(0);
          document.querySelector(".input").value = "";
          document.querySelector(".input").disabled = false;
          setResult(false);
        }}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
};
