import { faker } from '@faker-js/faker';
import fsExtra from 'fs-extra';
import path from 'node:path';
import { Product } from './shopping-types';
import { fileURLToPath } from 'node:url';

export function generateProduct(): Product {
	return {
		name: faker.commerce.productName(),
		price: Number(faker.commerce.price()),
		description: faker.commerce.productDescription(),
		material: faker.commerce.productMaterial(),
		department: faker.commerce.department(),
		id: faker.string.alphanumeric({ casing: 'upper', length: 10 }),
		rating: faker.number.float({ min: 1.0, max: 5.0, fractionDigits: 1 }),
	};
}

export function generateProducts(count = 1): Array<Product> {
	let products = new Array(count);
	for (let x = 0; x < count; x++) {
		products[x] = generateProduct();
	}

	return products;
}

export function generateToFile(count = 1, fileName = 'products.json') {
	let products = generateProducts(count);

	// Get the path to the current folder
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	try {
		fsExtra.writeJSONSync(path.join(__dirname, `../data/${fileName}`), { products }, { spaces: 2 });
		console.log(`Finished writing products data to ${fileName}`)
	} catch (error) {
		console.error(`Could not write products to ${fileName} because `, error)
	}
}
