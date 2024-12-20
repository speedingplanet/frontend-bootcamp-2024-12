import React from 'react';
import { Cart } from './shopping-types';

interface Props {
	cart: Cart;
}

export default function ShowCartLink({ cart }: Props) {
	if (cart.items.length === 0) return <span>Cart</span>;

	return <span>Cart ({cart.items.length})</span>;
}
