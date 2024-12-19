import React from 'react';
import { generateProducts } from './generate-products';

export const ProductBrowserReactQuery = () => {
	let products = generateProducts(200);
	return (
		<>
			<h3>Product Browser</h3>
			<div className="shopping-browser">
				<div className="browser-header-row">
					<div>Name</div>
					<div>Price</div>
					<div>Material</div>
					<div>Department</div>
				</div>
				{products.map((product) => (
					<div
						className="browser-body-row"
						key={product.id}
					>
						<div>{product.name}</div>
						<div>{product.price}</div>
						<div>{product.material}</div>
						<div>{product.department}</div>
					</div>
				))}
			</div>
		</>
	);
};

/*

*/
