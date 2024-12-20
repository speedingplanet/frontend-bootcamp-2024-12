export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	material: string;
	department: string;
	rating: number
}

export interface Cart {
	id: string;
	customerId: string;
	cartStatus: CartStatus;
	items: CartItem[];
	totalPrice?: number;
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export type CartStatus = 'Pending' | 'Saved' | 'Checked-out';
export type QuantityChange = 'add' | 'subtract';