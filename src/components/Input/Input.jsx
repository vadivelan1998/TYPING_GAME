import { useContext, useState } from "react";
import { Context } from "../Contexts/Context";

export const Input = () => {
  const {setStatus,setResult, setTimer, setOnTimer, letter, randomAlphabet } = useContext(Context);
  const [count, setCount] = useState(0);
  //console.log(count);

  function handleInput(e) {
    if (e.key !== letter) {
      setTimer((prev) => prev + 500);
    }
    if (count<19) {
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
        onChange={handleInput}
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
          setStatus(false)
        }}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
};
