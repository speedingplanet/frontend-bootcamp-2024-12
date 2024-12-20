import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, loadProducts } from './products-slice';
import { products } from '../data/products.json';
import { cartReducer } from './cart-slice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer
	},
});

store.dispatch(loadProducts(products));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
