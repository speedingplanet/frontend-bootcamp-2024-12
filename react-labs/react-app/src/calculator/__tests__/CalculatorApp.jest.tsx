import CalculatorApp from '../CalculatorApp';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

it('should render the calculator', () => {
	render(<CalculatorApp />);

	// let clearButton = screen.getByText('C');
	let clearButton = screen.getByRole('button', { name: 'C' });
	expect(clearButton).toBeInTheDocument();
});

it('should clear the initial display when the "C" button is clicked', async () => {
	/*
	Render CalculatorApp
	Check the display value (how can we get that?), what should it be?
	Get a reference to the Clear button
	Click on the clear button
	Check the display value, what should it be now?
	*/

	render(<CalculatorApp />);
	let user = userEvent.setup();

	// TODO: Maybe refactor to use an appropriate ARIA role for the display?
	let displayDiv = screen.getByTestId('display');
	expect(displayDiv.textContent).toBe('0');
	let clearButton = screen.getByRole('button', {name: 'C'});
	await user.click(clearButton);
	expect(displayDiv.textContent).toBe('');

});

it('should update the display value when number keys are clicked', async  () => {
	/*
	Render CalculatorApp
	Check the display value (how can we get that?), what should it be?
	Get a reference to a number button
	Click it
	See if the display value updated
	Get a reference to a different number button
	Click it
	See if the display value updated
	*/

	render(<CalculatorApp />);
	let user = userEvent.setup();
	let displayDiv = screen.getByTestId('display');
	expect(displayDiv.textContent).toBe('0');
	let sevenButton = screen.getByRole('button', {name: '7'});
	let fiveButton = screen.getByRole('button', {name: '5'});
	await user.click(fiveButton);
	expect(displayDiv.textContent).toBe('05');
	await user.click(sevenButton);
	expect(displayDiv.textContent).toBe('057');

});

it('should clear the display after the display has been updated, when the "C" button is clicked', () => {
	/*
	Render CalculatorApp
	Check the display value (how can we get that?), what should it be?
	Get a reference to a number button
	Click it
	See if the display value updated
	Get a reference to a different number button
	Click it
	See if the display value updated
	Get a reference to the Clear button
	Click on the clear button
	Check the display value, what should it be now?
	*/
});
