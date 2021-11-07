import { useState } from "react";
import Board from "./Board"
import './board.css';
import { calculateWinner } from './Helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);   
   
    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };
  
 return(<>
    <Board squares={board} onClick={handleClick} />
    <div className="winBox">
        
 <div className="winText">
  
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O") }
     
  
      </div> 
     
          </div>
          <div className="box" onClick={() => window.location.reload(false)}><h1>Back</h1></div>
     
    

  </>);  
   
  
  

}
export default Game

/*

          */