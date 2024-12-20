import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer, loadProducts } from './products-slice';
import { products } from '../data/products.json';

export const store = configureStore({
	reducer: combineReducers({
		products: productsReducer,
	}),
});

store.dispatch(loadProducts(products));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
