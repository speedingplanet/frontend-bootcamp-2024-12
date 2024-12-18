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
	className: string;
	// A function with no arguments () and an ignored return value (void)
	onButtonClick?: (display: string) => void;
}

export default function CalculatorButton({ display, className, onButtonClick }: Props) {
	function handleClick() {
		// console.log(`CalculatorButton: You clicked the ${display} button`);
		if (onButtonClick) onButtonClick(display);
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			className={className}
		>
			{display}
		</button>
	);
}
