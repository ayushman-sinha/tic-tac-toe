import { useState } from "react";

import './buttonC.css';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from './Game';
const HomeButtons = () => {
    const [isStart, setIsStart] = useState(false);
     
    return (
        
        <div className="ButtonContainer">
             <div className="box" onClick={() => setIsStart(true)}><h1>Start</h1></div>
            <div className="box"  ><h1>Rules</h1></div>
            <div className="box" onClick={() => setIsStart(false)}><h1>Exit</h1></div>
            {isStart ? <Game /> : null }
        </div>
    )
}

export default HomeButtons
