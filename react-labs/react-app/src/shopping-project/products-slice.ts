import { createSlice } from '@reduxjs/toolkit';

let productSlice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		loadProducts: (state, action) => {
			state = action.payload;
		},
	},
});

const { actions } = productSlice;
export const { loadProducts } = actions;
const productsReducer = productSlice.reducer;
export { productsReducer };
