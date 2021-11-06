import { useState } from "react";
import './buttonC.css';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from './Game';
import HomeButtons from './HomeButtons';

const StartPage = () => {
    const [isStart, setIsStart] = useState(false)
    return (
        <div className="ButtonContainer">
            
            <Particles params={particleConfig}/>       
            <div className="headText" >Tic-Tac-Toe</div>
             
          <HomeButtons/>
           
        
        </div>
       
    
    );
}

export default StartPage
