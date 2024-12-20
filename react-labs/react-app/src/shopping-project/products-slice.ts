import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './shopping-types';

let initialState: Array<Product> = []

let productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		loadProducts: (state, action: PayloadAction<Array<Product>>) => {
			return action.payload;
		},
	},
});

const { actions, reducer } = productSlice;
export const { loadProducts } = actions;
export { reducer as productsReducer };
