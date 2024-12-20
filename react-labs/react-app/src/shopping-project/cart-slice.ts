import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem, Product, QuantityChange } from './shopping-types';

let initialState: Cart = {
	id: '0',
	customerId: '0',
	cartStatus: 'Pending',
	items: [],
};

let cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			let product = action.payload;
			let foundItem = state.items.find((i) => i.product.id === product.id);
			if (foundItem) {
				foundItem.quantity += 1;
			} else {
				state.items.push({ product, quantity: 1 });
			}
		},
		changeItemQuantity: (
			state,
			action: PayloadAction<{ item: CartItem; direction: QuantityChange }>
		) => {
			const { item, direction } = action.payload;
			let itemToBeUpdated = state.items.find(i => i.product.id === item.product.id);

			if (!itemToBeUpdated) return;

			if (direction === 'add') {
				itemToBeUpdated.quantity += 1;
			} else {
				itemToBeUpdated.quantity -= 1;
			}
		},
	},
});

const { actions, reducer } = cartSlice;
export const { addToCart, changeItemQuantity } = actions;
export { reducer as cartReducer };
