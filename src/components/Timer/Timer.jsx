import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const Timer = () => {
  const { setStatus,mbt, setmbt, result, timer } = useContext(Context);

  if (result) {
    setTimeout(()=>{
  var myBestTime = document.querySelector(".time").innerHTML;
  if (!mbt) {
    localStorage.setItem("mybesttime", myBestTime);
    setmbt(myBestTime);
    setStatus(true);
  }
  if (mbt > myBestTime) {
    localStorage.setItem("mybesttime", myBestTime);
    setmbt(myBestTime);
    setStatus(true)
  }
    },1)
  
   

  }

  return (
    <div>
      <h3 className="timer">
        Time:<span className="time">{(timer / 1000).toFixed(3)}</span>s
      </h3>
      <p>my best time: {mbt?mbt:"Lets Play "} </p>
    </div>
  );
};
