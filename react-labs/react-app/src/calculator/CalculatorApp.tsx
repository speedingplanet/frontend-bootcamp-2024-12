import React from 'react';
import './calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

export default function CalculatorApp() {
	let firstName = 'John';

	return (
		<>
			<h2>{firstName}'s Calculator</h2>
			{/* div.calculator>button{$}*9 */}
			<div className="calculator">
				<CalculatorDisplay />

				{/* We'll come back to this in the afternoon */}
				{/* <CalculatorButton>1</CalculatorButton> */}
				{/* CalculatorButton[display="$"]*9 */}
				<CalculatorButton display="1"></CalculatorButton>
				<CalculatorButton display="2"></CalculatorButton>
				<CalculatorButton display="3"></CalculatorButton>
				<CalculatorButton display="4"></CalculatorButton>
				<CalculatorButton display="5"></CalculatorButton>
				<CalculatorButton display="6"></CalculatorButton>
				<CalculatorButton display="7"></CalculatorButton>
				<CalculatorButton display="8"></CalculatorButton>
				<CalculatorButton display="9"></CalculatorButton>
			</div>
		</>
	);
}
