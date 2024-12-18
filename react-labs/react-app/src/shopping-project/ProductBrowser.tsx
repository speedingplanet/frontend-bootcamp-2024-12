import React from 'react';
import { generateProducts } from './generate-products';

/*
Homework:

Turn this in an HTML table. (Or use <div>s and a CSS grid)
Show the product name, price, material, rating
Hints: The table header should be static
The table rows in the table body correspond to each product
The table data cells in each row correspond to the properties of the product

eventually looks something like:

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Price</th>
			<th>Material</th>
			<th>Rating</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Licensed Wooden Soap</td>
			<td>10.00</td>
			<td>Wood</td>
			<td>3.2</td>
		</tr>
		<tr>
			<td>Modern Rubber Gloves</td>
			<td>312.42</td>
			<td>Rubber</td>
			<td>4.7</td>
		</tr>
	</tbody>
</table>


*/



export const ProductBrowser = () => {
	let products = generateProducts(10);
	return (
		<>
			<h3>Product Browser</h3>
			<div>
				<ul>
					{products.map((product) => (
						<li key={product.id}>{product.name}</li>
					))}
				</ul>
			</div>
		</>
	);
};
