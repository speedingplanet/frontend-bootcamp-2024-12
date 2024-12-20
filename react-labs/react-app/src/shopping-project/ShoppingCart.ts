import { Cart, CartItem, CartStatus } from './shopping-types';

export class ShoppingCart implements Cart {
	id = '0';
	customerId = '0';
	items: CartItem[] = [];
	totalPrice = 0;
	cartStatus: CartStatus = 'Pending';

	constructor(item: CartItem) {
		this.addItem(item);
	}

	addItem(item: CartItem) {
		this.items.push(item);
	}

	deleteItem(item: CartItem | string) {
		if (typeof item === 'string') {
			this.items = this.items.filter((i) => i.product.id !== item);
		} else {
			this.items = this.items.filter((i) => i !== item);
		}
	}

	updateItem(item: CartItem) {
		let position = this.items.findIndex((i) => i.product.id === item.product.id);
		if (position !== -1) {
			this.items[position] = item;
		} else {
			throw Error('Could not find your item in your cart');
		}
	}

	calculateTotalPrice() {
		let total = 0;
		for (let item of this.items) {
			total += item.product.price * item.quantity;
		}

		return total;
	}

	toJson() {
		return {
			id: this.id,
			customerId: this.customerId,
			cartStatus: this.cartStatus,
			items: this.items,
			totalPrice: this.calculateTotalPrice(),
		};
	}
}
