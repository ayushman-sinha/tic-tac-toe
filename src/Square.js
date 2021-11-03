import React from 'react'
import './board.css';


const Square = (props) => (
	<button className={props.className} onClick={props.onClick}>{props.value}</button>
);
export default Square
