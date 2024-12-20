import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchAllProducts } from './shopping-dao';
import ProductBrowserRow from './ProductBrowserRow';
import { Product } from './shopping-types';

export const ProductBrowserReactQuery = () => {
	const {
		isError,
		isPending,
		error,
		data: products,
	} = useQuery({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	});

	if (isPending) {
		return <span>Data loading....</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	function handleAddToCart(product: Product) {
		console.log(`You added a ${product.name} to your cart`);

		// What happens the first time we add an item to our cart?
		// Does a cart exist? No? Create one. Yes, add to it.
		// What happens subsequent times?
		// Just add to the cart
		// How do we tell the difference? 
		// Does a cart exist? 

	}

	return (
		<>
			<h3>Product Browser with React Query</h3>
			<div className="shopping-browser">
				<div className="browser-header-row">
					<div>Name</div>
					<div>Price</div>
					<div>Material</div>
					<div>Department</div>
					<div>&nbsp;</div>
				</div>
				{products.map((product) => (
					<ProductBrowserRow
						key={product.id}
						product={product}
						onButtonClick={handleAddToCart}
					/>
				))}
			</div>
			<footer>
				<div className="message">Message updates will go here</div>
			</footer>
		</>
	);
};

/*

*/
