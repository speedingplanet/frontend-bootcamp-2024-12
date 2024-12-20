import { http, HttpResponse } from 'msw';
import { baseUrl } from '../shopping-project/shopping-dao';
import { products } from '../data/products.json';

export const handlers = [
	http.get(baseUrl + 'products', () => {
		return HttpResponse.json(products);
	}),
];
