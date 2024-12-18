import CalculatorButton from '../CalculatorButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const noopFn = () => {};

describe('Testing CalculatorButton', () => {
	it('should render', () => {
		render(
			<CalculatorButton
				display="5"
				onButtonClick={noopFn}
			/>
		);
	});

	it('should run the custom event handler for onButtonClick', async () => {
		let spyFn = jest.fn();
		let user = userEvent.setup();
		render(
			<CalculatorButton
				display="5"
				onButtonClick={spyFn}
			/>
		);

		let button = screen.getByRole('button');
		expect(spyFn).not.toHaveBeenCalled();

		await user.click(button);
		expect(spyFn).toHaveBeenCalled();
		expect(spyFn).toHaveBeenCalledTimes(1);
		expect(spyFn).toHaveBeenCalledWith('5');
	});

	it('should run an implementation on a spy function', async () => {
		let spyFn = jest.fn((displayValue) => {
			console.log(`Called with ${displayValue}`);
		});
		let user = userEvent.setup();
		render(
			<CalculatorButton
				display="5"
				onButtonClick={spyFn}
			/>
		);

		let button = screen.getByRole('button');
		expect(spyFn).not.toHaveBeenCalled();

		await user.click(button);
		expect(spyFn).toHaveBeenCalled();
		expect(spyFn).toHaveBeenCalledTimes(1);
		expect(spyFn).toHaveBeenCalledWith('5');
	});

	it('should run an mocked version of a function', async () => {
		let mockFn = jest.fn();

		// Mock the return value instead of implementing
		mockFn.mockReturnValue(true);
		let user = userEvent.setup();
		render(
			<CalculatorButton
				display="5"
				onButtonClick={mockFn}
			/>
		);

		let button = screen.getByRole('button');
		expect(mockFn).not.toHaveBeenCalled();

		await user.click(button);
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalledTimes(1);
		expect(mockFn).toHaveBeenCalledWith('5');
	});
});
