import Square from './Square';
import React from 'react';
import './board.css';
import './buttonC.css';
const Board = ({ squares, onClick }) => (
    <div className="mainContainer">
	<div className="container">
        
		{squares.map((square, i) => (
			<Square className={`eachSq`} key={i} value={square} onClick={() => onClick(i)} />
		)) }
      
	</div>
    </div>
    
);


export default Board
