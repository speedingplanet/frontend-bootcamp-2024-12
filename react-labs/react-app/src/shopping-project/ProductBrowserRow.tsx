import React from 'react';
import { Product } from './shopping-types';
import { useAppDispatch } from './hooks';
import { addToCart } from './cart-slice';

interface Props {
	product: Product;
}

export default function ProductBrowserRow({ product }: Props) {
	const dispatch = useAppDispatch();

	return (
		<div
			className="browser-body-row"
			key={product.id}
		>
			<div>{product.name}</div>
			<div>{product.price}</div>
			<div>{product.material}</div>
			<div>{product.department}</div>
			<div>
				<button
					type="button"
					onClick={() => dispatch(addToCart(product))}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
