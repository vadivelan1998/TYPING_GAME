import { AlphabetCard } from "../AlphabetCard/AlphabetCard";
import { Timer } from "../Timer/Timer";
import { Input } from "../Input/Input";
import { ResultCard } from "../ResultCard/ResultCard";
import { useContext } from "react";
import { Context } from "../Contexts/Context";
export const Home = () => {
  const { result } = useContext(Context);
  return (
    <div className="home">
      <h1>Type The Alphabet</h1>
      <p>Typing game to see how fast type. The timer starts when you do :)</p>
      <br />
      {result ? <ResultCard /> : <AlphabetCard />}

      <Timer />
      <Input />
    </div>
  );
};
