import React from 'react'
import './buttonC.css';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from './Game';

const StartPage = () => {
   
    return (
      
        



  
        <div className="ButtonContainer">
            <Router>
            <Particles params={particleConfig}/>       
            <div className="headText" >Tic-Tac-Toe</div>
             
            <Link to="/Game"  className="box" style={{ color: 'inherit', textDecoration: 'inherit'}}><h1>Start</h1></Link>
            
            <div className="box"  ><h1>Rules</h1></div>
            <div className="box"><h1>Exit</h1></div>
             <Switch>
        <Route exact path="/Game">
          <Game />
        </Route>
        </Switch>
        </Router>
        </div>
       
    
    );
}

export default StartPage
