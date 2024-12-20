import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, loadProducts } from './products-slice';
// import { cartReducer } from './cart-slice';

// Products data will eventually hook this up to an API
import { products } from '../data/products.json';


export const store = configureStore({
	reducer: {
		products: productsReducer,
	},
});

store.dispatch(loadProducts(products));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
