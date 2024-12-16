import React, { useState } from 'react';
import './calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

export default function CalculatorApp() {
	// const [value, setter] = useState(initialValue)
	const [displayValue, setDisplayValue] = useState('0');

	let firstName = 'John';

	// Callback, or event handler, or even a custom event handler
	function handleButtonClick(buttonValue: string) {
		console.log(`CalculatorApp: You clicked on the ${buttonValue} button.`);
		setDisplayValue(buttonValue);
	}

	return (
		<>
			<h2>{firstName}'s Calculator</h2>
			{/* div.calculator>button{$}*9 */}
			<div className="calculator">
				<CalculatorDisplay displayValue={displayValue} />

				{/* We'll come back to this in the afternoon */}
				{/* <CalculatorButton>1</CalculatorButton> */}
				{/* CalculatorButton[display="$"]*9 */}
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="one"
					display="1"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="two"
					display="2"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="three"
					display="3"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="four"
					display="4"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="five"
					display="5"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="six"
					display="6"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="seven"
					display="7"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="eight"
					display="8"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="nine"
					display="9"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="zero"
					display="0"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="decimal-point"
					display="."
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="equals"
					display="="
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="clear"
					display="C"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="positive-negative"
					display="+/-"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="percent"
					display="%"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="division"
					display="÷"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="multiplication"
					display="×"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="addition"
					display="+"
				></CalculatorButton>
				<CalculatorButton
					onButtonClick={handleButtonClick}
					className="subtraction"
					display="-"
				></CalculatorButton>
			</div>
		</>
	);
}
