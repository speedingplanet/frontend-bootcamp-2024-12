import { faker } from '@faker-js/faker';
import { Product } from './shopping-types';

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

