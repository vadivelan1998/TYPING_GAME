import { createContext,useEffect, useState } from "react";


export const Context = createContext();
export const ContextProvider = ({ children }) => {
const [result,setResult]=useState(false)
//  random letter
const [letter,setLetter]=useState('A')
function randomAlphabet(){
var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let index = Math.floor(Math.random() * (26-0)+(0));
let random=alphabet[index]
setLetter(random)

}
   

//  timer
const [timer, setTimer] = useState(0);
const [onTimer, setOnTimer] = useState(false);
useEffect(() => {
  let interval = null;
  if(onTimer) {
    interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
  } else {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [onTimer]);

  return (
    <Context.Provider
      value={{
        result,
        setResult,
        timer,
        onTimer,
        setOnTimer,
        setTimer,
        randomAlphabet,
        letter,
      }}
    >
      {children}
    </Context.Provider>
  );
};
