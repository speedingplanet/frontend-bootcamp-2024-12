import React from 'react';
import { Product } from './shopping-types';

interface Props {
	product: Product;
	onAddToCart: (product: Product) => void;
}

export default function ProductBrowserRow({ product, onAddToCart }: Props) {
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
					onClick={() => onAddToCart(product)}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
