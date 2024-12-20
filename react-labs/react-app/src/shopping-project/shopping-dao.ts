import { Product } from './shopping-types';

let baseUrl = 'http://localhost:7500/';

export async function fetchAllProducts(): Promise<Array<Product>> {
	try {
		let response = await fetch(baseUrl + 'products');
		if (response.ok) {
			let products = await response.json();
			return products;
		} else {
			throw new Error(`Bad HTTP response: ${response.status}`);
		}
	} catch (error) {
		console.error('Something went wrong with the DAO', error);
		throw new Error('DAO Error');
	}
}

export { baseUrl };
