import {  useContext } from "react";
import { Context } from "../Contexts/Context";
export const Timer=()=>{
    const { timer } = useContext(Context);
  
    return (
      <div>
        <h2>
          Time:{(timer/1000).toFixed(3)}s
        </h2>
        <h3>my best time: 1.39! </h3>
      </div>
    );
}