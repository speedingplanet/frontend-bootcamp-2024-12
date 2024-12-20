import React from 'react';
import { CartItem, QuantityChange } from './shopping-types';

interface Props {
	item: CartItem;
	onChangeQuantity: (direction: QuantityChange, item: CartItem) => void;
}

export default function DisplayShoppingCartItem({ item, onChangeQuantity }: Props) {
	return (
		<div className="shopping-cart-item">
			<ul>
				<li>Name: {item.product.name}</li>
				<li>Price: {item.product.price}</li>
				<li>Description: {item.product.description}</li>
				<li>Rating: {item.product.rating}</li>
				<li>
					Quantity: {item.quantity}{' '}
					<span>
						<button
							type="button"
							onClick={() => onChangeQuantity('add', item)}
						>
							➕
						</button>
						<button
							type="button"
							onClick={() => onChangeQuantity('subtract', item)}
						>
							➖
						</button>
					</span>
				</li>
			</ul>
		</div>
	);
}
