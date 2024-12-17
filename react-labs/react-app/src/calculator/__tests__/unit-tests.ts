import { handleInput } from '../CalculatorApp';

it('should be true', () => {
	// Does Boolean(1) === true?
	expect(1).toBeTruthy();
	// expect(1).toBe(true);
});

it('should not throw an error', () => {
	expect(handleInput).not.toThrow();
});

it('should concatenate a value', () => {
	let currentDisplay = '123';
	let input = '4';
	let updatedDisplayValue = handleInput(input, currentDisplay);

	expect(updatedDisplayValue).not.toEqual('');

	// Expect updatedDisplayValue to equal '1234' 
	expect(updatedDisplayValue).toEqual(currentDisplay + input);

	// Expect updatedDisplayValue to contain '4' 
	expect(updatedDisplayValue).toContain(input);

	// Expect updatedDisplayValue to contain '123' 
	expect(updatedDisplayValue).toContain(currentDisplay);
});

/*
If we call handleInput with 'C' as the input, and a non-empty string
as the displayValue, we expect the return value to be the empty string ''

let display = handleInput('C', '78564');
*/