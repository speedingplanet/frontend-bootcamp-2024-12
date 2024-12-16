import React from 'react';
import './calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

export default function CalculatorApp() {
	let firstName = 'John';

	// Callback, or event handler, or even a custom event handler
	function handleButtonClick(buttonValue: string) {
		console.log(`CalculatorApp: You clicked on the ${buttonValue} button.`);
	}

	return (
		<>
			<h2>{firstName}'s Calculator</h2>
			{/* div.calculator>button{$}*9 */}
			<div className="calculator">
				<CalculatorDisplay />

				{/* We'll come back to this in the afternoon */}
				{/* <CalculatorButton>1</CalculatorButton> */}
				{/* CalculatorButton[display="$"]*9 */}
				<CalculatorButton onButtonClick={handleButtonClick} className="one" display="1"></CalculatorButton>
				<CalculatorButton className="two" display="2"></CalculatorButton>
				<CalculatorButton className="three" display="3"></CalculatorButton>
				<CalculatorButton className="four" display="4"></CalculatorButton>
				<CalculatorButton className="five" display="5"></CalculatorButton>
				<CalculatorButton className="six" display="6"></CalculatorButton>
				<CalculatorButton className="seven" display="7"></CalculatorButton>
				<CalculatorButton className="eight" display="8"></CalculatorButton>
				<CalculatorButton className="nine" display="9"></CalculatorButton>
				<CalculatorButton className="zero" display="0"></CalculatorButton>
				<CalculatorButton className="decimal-point" display="."></CalculatorButton>
				<CalculatorButton className="equals" display="="></CalculatorButton>
				<CalculatorButton className="clear" display="C"></CalculatorButton>
				<CalculatorButton className="positive-negative" display="+/-"></CalculatorButton>
				<CalculatorButton className="percent" display="%"></CalculatorButton>
				<CalculatorButton className="division" display="÷"></CalculatorButton>
				<CalculatorButton className="multiplication" display="×"></CalculatorButton>
				<CalculatorButton className="addition" display="+"></CalculatorButton>
				<CalculatorButton className="subtraction" display="-"></CalculatorButton>
			</div>
		</>
	);
}
