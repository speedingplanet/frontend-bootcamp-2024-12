import React from 'react';
import { Cart, CartItem, QuantityChange } from './shopping-types';
import DisplayShoppingCartItem from './DisplayShoppingCartItem';

interface Props {
	cart: Cart;
	onChangeQuantity: (direction: QuantityChange, item: CartItem) => void;
}

export default function DisplayShoppingCart({ cart, onChangeQuantity }: Props) {
	if (cart.items.length === 0) return <span>Your cart is empty!</span>;

	/*
	Iterate over the items in the cart and display them
	*/
	return (
		<section>
			{cart.items.map((i) => (
				<DisplayShoppingCartItem
					onChangeQuantity={onChangeQuantity}
					item={i}
					key={i.product.id + '|' + i.quantity}
				/>
			))}
		</section>
	);
}
