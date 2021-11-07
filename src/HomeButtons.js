import { useState } from "react";
import  './board.css';
import './buttonC.css';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <div >
   <Game ></Game>  
            </div>)
     }
     if(isStart==3)
    {
        return(
            <div></div>
        )
    }

}

export default HomeButtons
