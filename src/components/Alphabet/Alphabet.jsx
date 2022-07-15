//import { useRef } from "react";


export const Alphabet=({onAlpha,setOnAlpha})=>{
    // let count = useRef(0);
    var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let index = Math.floor(Math.random() * 25);
    
    setOnAlpha(false)
    return <div className="alphabet" >
        <h1>{alphabet[index]}</h1>
        
       {/* {onAlpha?<h1>{alphabet[index]}</h1>:<h1>{alphabet[index]}</h1>} */}
    </div>
}