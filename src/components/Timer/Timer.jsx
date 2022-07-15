import { useState,useEffect } from "react";

export const Timer=({onTimer})=>{
     const [timer, setTimer] = useState(0);
     
     useEffect(() => {
       let interval = null;
       if (onTimer) {
         interval = setInterval(() => {
           setTimer((prev) => prev + 10);
         }, 10);
       } else {
         clearInterval(interval);
       }
       return () => clearInterval(interval);
     }, [onTimer]);
    return (
      <div>
        <h2>
          Time:{(timer/1000).toFixed(3)}s
        </h2>
        <h3>my best time: 1.39! </h3>
      </div>
    );
}