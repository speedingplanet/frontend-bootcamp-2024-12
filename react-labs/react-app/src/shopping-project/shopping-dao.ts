let baseUrl = 'http://localhost:7500/products'

export async function getAllProducts() {
	try {
		let response = await fetch(baseUrl);
		if (response.ok) {
			let products = await response.json();
			return products;
		} else {
			throw new Error(`Bad HTTP response: ${response.status}`);
		}
	} catch (error) {
		console.error('Something went wrong with the DAO', error)
	}
}