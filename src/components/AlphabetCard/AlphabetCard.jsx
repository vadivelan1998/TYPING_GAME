import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const AlphabetCard = () => {
  const { letter } = useContext(Context);

  return (
    <div className="alphabet">
      
        <h1>{letter}</h1>
      
    </div>
  );
};
