import CalculatorApp from '../CalculatorApp';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

it('should render the calculator', () => {
	render(<CalculatorApp />);

	// let clearButton = screen.getByText('C');
	let clearButton = screen.getByRole('button', {name: 'C'});
	expect(clearButton).toBeInTheDocument();
});