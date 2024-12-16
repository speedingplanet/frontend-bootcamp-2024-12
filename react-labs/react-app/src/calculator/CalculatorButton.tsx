
/*
export: Make this function available for import elsewhere
default: import without curly braces, e.g.
	import CalculatorButton from './CalculatorButton'
	instead of 
	import { CalculatorButton } from './CalculatorButton'
	ONLY ONE default export per file
	This is mostly a React convention, no real benefit or penalty
function: JS keyword for defining a function
CalculatorButton: The name of our function
*/

interface Props {
	display: string;
}

export default function CalculatorButton({display}: Props) {
	function handleClick() {
		console.log(`You clicked the ${display} button`)
	}

	return <button type="button" onClick={handleClick}>{display}</button>;
}

