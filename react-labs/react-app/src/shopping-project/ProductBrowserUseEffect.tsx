import React, { useEffect, useState } from 'react';
import { Product } from './shopping-types';
import { fetchAllProducts } from './shopping-dao';

export const ProductBrowserUseEffect = () => {
	const [products, setProducts] = useState<Array<Product>>([]);

	useEffect(() => {
		const getData = async () => {
			let products = await fetchAllProducts();
			setProducts(products);
		};

		getData().catch((error) => {
			console.error('DAO error handled at the UI level:', error);
		});
	}, []);

	return (
		<>
			<h3>Product Browser w/useEffect</h3>
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
