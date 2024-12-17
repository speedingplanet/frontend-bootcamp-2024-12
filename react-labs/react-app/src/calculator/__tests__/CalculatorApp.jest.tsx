import CalculatorApp from '../CalculatorApp';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

it('should render the calculator', () => {
	render(<CalculatorApp />);

	// let clearButton = screen.getByText('C');
	let clearButton = screen.getByRole('button', {name: 'C'});
	expect(clearButton).toBeInTheDocument();
});

it('should clear the initial display when the "C" button is clicked', () => {
	/*
	Render CalculatorApp
	Check the display value (how can we get that?), what should it be?
	Get a reference to the Clear button
	Click on the clear button
	Check the display value, what should it be now?
	*/
});

it('should update the display value when number keys are clicked', () => {
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
