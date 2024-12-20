import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import ShoppingApp from '../ShoppingApp';
import { createRoutesStub } from 'react-router';
import React from 'react';

describe('ShoppingApp', () => {
	// Use a helper type because createRoutesStub returns a complex, unnamed type
	let RoutedShoppingApp: ReturnType<typeof createRoutesStub>;

	beforeEach(() => {
		/** @see @link{https://reactrouter.com/start/framework/testing#testing} */
		RoutedShoppingApp = createRoutesStub([
			{
				path: '/shopping/*',
				Component: ShoppingApp,
			},
		]);
	});

	it('should render', () => {
		render(<RoutedShoppingApp initialEntries={['/shopping']} />);
	});
});
