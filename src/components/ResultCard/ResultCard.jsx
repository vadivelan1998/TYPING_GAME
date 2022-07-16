import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const ResultCard = () => {
  const { timer,status, mbt} = useContext(Context);
 console.log(timer/1000,"ullllll",mbt)
  return (
    <div className="alphabet">
      {status ? (
        <h3>" SUCCESS ! "</h3>
      ) : (
        <h3 style={{ color: "red" }}>" FAILURE ! "</h3>
      )}
    </div>
  );
};
