import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchAllProducts } from './shopping-dao';

export const ProductBrowserReactQuery = () => {
	const { isError, isPending, error, data: products } = useQuery({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	});

	if (isPending) {
		return <span>Data loading....</span>
	}

	if (isError) {
		return <span>Error: {error.message}</span>
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
