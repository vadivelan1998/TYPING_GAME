import { Alphabet } from "../AlphabetCard/AlphabetCard";
//import { useContext, useState } from "react";
import { Timer } from "../Timer/Timer";
//import { Context } from "../Contexts/Context";
import { Input } from "../Input/Input";

export const Home = () => {
//   const { setResult, setTimer, setOnTimer, letter, randomAlphabet } =
//     useContext(Context);
//   const [count, setCount] = useState(0);
//   console.log(count);
//   // const [onTimer, setOnTimer] = useState(false

  //const [key, setKey] = useState("");
//   function handleInput(e) {
//     if (e.key !== letter) {
//       setTimer((prev) => prev + 500);
//     }
//     if (count <= 20) {
//       console.log(e.key);
//       setCount((prev) => prev + 1);
//       setOnTimer(true);
//       randomAlphabet();
//       setKey(e.key);
//     } else {
//       setOnTimer(false);
//       setResult(true);
//       document.querySelector(".input").disabled = true;
//     }
//   }

  return (
    <div className="home">
      <h1>Type The Alphabet</h1>
      <h3>Typing game to see how fast type. The timer starts when you do :)</h3>

      <br />
      <Alphabet/>

      <Timer />
      {/* <input
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
          setResult(false)
        }}
        className="reset"
      >
        Reset
      </button> */}
      <Input/>
    </div>
  );
};
