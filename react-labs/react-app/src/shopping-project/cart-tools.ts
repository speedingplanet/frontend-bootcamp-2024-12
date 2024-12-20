import { Cart, CartItem } from './shopping-types';

export function saveLocally(cart: Cart): boolean {
	let serializedCart = JSON.stringify(cart);
	localStorage.setItem('cart', serializedCart);
	console.log('Cart saved locally');
	return true;
}

export function retrieveCart(): Cart | null {
	let serializedCart = localStorage.getItem('cart');
	if (serializedCart !== null) {
		return JSON.parse(serializedCart);
	}
	return null;
}

let defaultCart: Cart = {
	id: '0',
	customerId: '0',
	items: [],
	totalPrice: 0,
	cartStatus: 'Pending',
};

export function createCart(item?: CartItem): Cart {
	return { ...defaultCart, items: item ? [item] : [] };
}

export function addItem(cart: Cart, item: CartItem) {
	cart.items.push(item);
	return { ...cart };
}

export function deleteItem(cart: Cart, item: CartItem | string) {
	if (typeof item === 'string') {
		cart.items = cart.items.filter((i) => i.product.id !== item);
	} else {
		cart.items = cart.items.filter((i) => i !== item);
	}

	return { ...cart };
}

export function updateItem(cart: Cart, item: CartItem) {
	let position = cart.items.findIndex((i) => i.product.id === item.product.id);
	if (position !== -1) {
		cart.items[position] = item;
	} else {
		throw Error('Could not find your item in your cart');
	}

	return { ...cart };
}

export function calculateTotalPrice(cart: Cart) {
	let total = 0;
	for (let item of cart.items) {
		total += item.product.price * item.quantity;
	}

	return total;
}

export function toJson(cart: Cart) {
	return {
		id: cart.id,
		customerId: cart.customerId,
		cartStatus: cart.cartStatus,
		items: cart.items,
		totalPrice: calculateTotalPrice(cart),
	};
}
