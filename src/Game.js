import { useState } from "react";
import Board from "./Board"
import './board.css';
import { calculateWinner } from './Helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const[full,setFull]=useState(0);   
   let p=0;
    const handleClick = (i) => {
        
      //  console.log(p);
        const boardCopy = [...board];
        
       
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        p++;
        setFull(full+1);
        console.log(full);
        setBoard(boardCopy);
        setXisNext(!xIsNext);
      
        
    };
  if(full===9&&winner===null)//Check whether all the cells in the board is filled and its a draw
  return(<div className="winBox adjustPos">
  <div className="winText">DRAW</div>
  <div className="box" onClick={() => window.location.reload(false)}><h1>Back</h1></div>
  </div>
  );
  else
 return(<>
    <Board squares={board} onClick={handleClick} />
    <div className="winBox">
        
 <div className="winText">
 {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </div> 
     
          </div>
          <div className="box" onClick={() => window.location.reload(false)}><h1>Back</h1></div>
     
    

  </>);  
   
  
  

}
export default Game

