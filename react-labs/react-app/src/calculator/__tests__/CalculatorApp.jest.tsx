import CalculatorApp from '../CalculatorApp';
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

let clearButton: HTMLElement;
let fiveButton: HTMLElement;
let sevenButton: HTMLElement;
let displayDiv: HTMLElement;
let user: UserEvent;

beforeAll(() => {});

// afterEach() -> Same thing, but AFTER each test
beforeEach(() => {
	// Works because we don't pass props into CalculatorApp
	// A component that had different props per test would have to render in the individual tests
	render(<CalculatorApp />);

	// TODO: Maybe refactor to use an appropriate ARIA role for the display?
	displayDiv = screen.getByTestId('display');

	clearButton = screen.getByRole('button', { name: 'C' });
	fiveButton = screen.getByRole('button', { name: '5' });
	sevenButton = screen.getByRole('button', { name: '7' });

	user = userEvent.setup();
});

afterEach(() => {});
afterAll(() => {});

/*
beforeAll / afterAll, which runs only once, before or after ALL tests.
*/

it('should render the calculator', () => {
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

	expect(displayDiv.textContent).toBe('0');
	await user.click(clearButton);
	expect(displayDiv.textContent).toBe('');
});

it('should update the display value when number keys are clicked', async () => {
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

	expect(displayDiv.textContent).toBe('0');
	await user.click(fiveButton);
	expect(displayDiv.textContent).toBe('05');
	await user.click(sevenButton);
	expect(displayDiv.textContent).toBe('057');
});

it('should clear the display after the display has been updated, when the "C" button is clicked', async () => {
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

	expect(displayDiv.textContent).toBe('0');
	await user.click(fiveButton);
	await user.click(sevenButton);
	expect(displayDiv.textContent).toBe('057');

	await user.click(clearButton);
	expect(displayDiv.textContent).toBe('');
});
