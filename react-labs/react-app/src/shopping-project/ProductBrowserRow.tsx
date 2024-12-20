import React from 'react';
import { Product } from './shopping-types';

interface Props {
	product: Product;
	onButtonClick: (product: Product) => void;
}

export default function ProductBrowserRow({ product, onButtonClick }: Props) {
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
					onClick={() => onButtonClick(product)}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
