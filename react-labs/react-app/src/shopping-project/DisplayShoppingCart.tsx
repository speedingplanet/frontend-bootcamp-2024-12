import React from 'react';
import DisplayShoppingCartItem from './DisplayShoppingCartItem';
import { useAppSelector } from './hooks';

export default function DisplayShoppingCart() {
	let cart = useAppSelector((state) => state.cart);
	if (cart.items.length === 0) return <span>Your cart is empty!</span>;

	/*
	Iterate over the items in the cart and display them
	*/
	return (
		<section>
			{cart.items.map((i) => (
				<DisplayShoppingCartItem
					item={i}
					key={i.product.id + '|' + i.quantity}
				/>
			))}
		</section>
	);
}
