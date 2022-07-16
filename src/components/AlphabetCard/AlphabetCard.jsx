import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const AlphabetCard = () => {
  const { timer,mybesttime,letter, result } = useContext(Context);

  return (
    <div className="alphabet">
      {result ? (
        timer < mybesttime ? (
          <h3>" SUCCESS ! "</h3>
        ) : (
          <h3>" FAILURE ! "</h3>
        )
      ) : (
        <h1>{letter}</h1>
      )}
    </div>
  );
};
