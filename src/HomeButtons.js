import { useState } from "react";
import  './board.css';
import './buttonC.css';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from './Game';
const HomeButtons = () => {
    const [isStart, setIsStart] = useState(false);
    
     if(!isStart)
     {
    return (
        
        <div className="ButtonContainer">
             <div className="box" onClick={() => setIsStart(true)}><h1>Start</h1></div>
            <div className="box"  ><h1>Rules</h1></div>
            <div className="box" onClick={() => setIsStart(false)}><h1>Exit</h1></div>
            {isStart ?  <div className="GameContainer"><Game ></Game></div>: null}
           
        </div>
        
    )
     }
     else
     {
         return(
        <div >
   <Game ></Game>  
            </div>)
     }

}

export default HomeButtons
