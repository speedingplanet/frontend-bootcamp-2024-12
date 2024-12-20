import React from 'react';
import { CartItem } from './shopping-types';
import { useAppDispatch } from './hooks';
import { changeItemQuantity } from './cart-slice';

interface Props {
	item: CartItem;
}

export default function DisplayShoppingCartItem({ item }: Props) {
	let dispatch = useAppDispatch();

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
							onClick={() => dispatch(changeItemQuantity({ direction: 'add', item }))}
						>
							➕
						</button>
						<button
							type="button"
							onClick={() => dispatch(changeItemQuantity({ direction: 'subtract', item }))}
						>
							➖
						</button>
					</span>
				</li>
			</ul>
		</div>
	);
}
