interface Props {
	// Optional displayValue
	displayValue?: string;
}

export default function CalculatorDisplay({ displayValue }: Props) {
	return (
		<div className="display">
			{/* Print displayValue, unless it is null or undefined, then print zero */}
			<div data-testid="display">{displayValue ?? 0}</div>
		</div>
	);
}
