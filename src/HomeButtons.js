import { useState } from "react";
import  './board.css';
import './buttonC.css';

import Game from './Game';
const HomeButtons = () => {
    const [isStart, setIsStart] = useState(1);
    
     if(isStart==1)
     {
    return (
        
        <div className="ButtonContainer">
             <div className="box" onClick={() => setIsStart(2)}><h1>Start</h1></div>
            <div className="box" onClick={() => setIsStart(3)} ><h1>Rules</h1></div>
            <div className="box" onClick={() => setIsStart(1)}><h1>Exit</h1></div>
          
           
        </div>
        
    )
     }
    if(isStart==2)
     {
         return(
        <div  >
   <Game ></Game>  
            </div>)
     }
     if(isStart==3)
    {
        return(
            <>
            <div className="rules"><ul>
                <li>Follow me on Instagram : @ayushmaan.sinha</li>
                <li>Follow me on LinkedIn : https://www.linkedin.com/in/ayushman-sinha-1606/</li>
            </ul></div>
            <div className="box" onClick={() => window.location.reload(false)}><h1>Back</h1></div>
            </>
            
        )
    }

}

export default HomeButtons
