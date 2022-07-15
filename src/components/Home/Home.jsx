import { Alphabet } from "../Alphabet/Alphabet"
 import { useState } from "react";
import { Timer } from "../Timer/Timer";
export const Home=()=>{
    const [count,setCount]=useState(0)
    console.log(count)
const [onTimer, setOnTimer] = useState(false);
const [onAlpha,setOnAlpha]=useState(false)
// if(count==20)
// {
//     setOnTimer(false)
// }
    return (
      <div className="home">
        <h1>Type The Alphabet</h1>
        <h3>
          Typing game to see how fast type. The timer starts when you do :)
        </h3>

        <br />
        <Alphabet onAlpha={onAlpha} setOnAlpha={setOnAlpha} />

        <Timer onTimer={onTimer} />
        <input
          onKeyPress={() => {
            setCount((prev)=>prev+1)
             setOnTimer(true);
             setOnAlpha(true)
          }}
          className="input"
          type="text"
          placeholder="Type Here"
        />
        <button className="reset">Reset</button>
      </div>
    );
}