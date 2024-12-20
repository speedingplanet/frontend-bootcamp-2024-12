import './shopping-project.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import DisplayShoppingCart from './DisplayShoppingCart';
import ProductBrowser from './ProductBrowser';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from './shopping-dao';
import { Cart, CartItem, Product, QuantityChange } from './shopping-types';
import { createCart } from './cart-tools';
import ShowCartLink from './ShowCartLink';
import { store } from './configure-store';
import { Provider } from 'react-redux';

export default function ShoppingApp() {
	const [products, setProducts] = useState<Array<Product>>([]);
	const [cart, setCart] = useState<Cart>(createCart());

	useEffect(() => {
		const getData = async () => {
			let products = await fetchAllProducts();
			setProducts(products);
		};

		getData().catch((error) => {
			console.error('DAO error handled at the UI level:', error);
		});
	}, []);

	function handleAddToCart(product: Product) {
		let foundItem = cart.items.find((i) => product.id === i.product.id);
		if (foundItem !== undefined) {
			foundItem.quantity = foundItem.quantity + 1;
		} else {
			cart.items.push({ product, quantity: 1 });
		}

		setCart({ ...cart });
	}

	function handleChangeQuantity(direction: QuantityChange, item: CartItem) {
		let foundCartItem = cart.items.find((i) => i.product.id === item.product.id);

		if (foundCartItem === undefined) return;

		if (direction === 'add') {
			foundCartItem.quantity += 1;
		} else if (direction === 'subtract' && foundCartItem.quantity > 0) {
			foundCartItem.quantity -= 1;
		}

		setCart({ ...cart });
	}

	return (
		<Provider store={store}>
			<section>
				<header>
					<h1>Unnamed Shopping App</h1>
				</header>
				<nav className="shopping-navbar">
					<ul>
						<li>
							<NavLink to="/shopping/cart">
								<ShowCartLink cart={cart} />
							</NavLink>
						</li>
						<li>
							<NavLink to="/shopping/browse">Browse Products</NavLink>
						</li>
					</ul>
				</nav>
				<section>
					<Routes>
						<Route
							path="/cart"
							element={
								<DisplayShoppingCart
									cart={cart}
									onChangeQuantity={handleChangeQuantity}
								/>
							}
						/>
						<Route
							path="/browse"
							element={
								<ProductBrowser
									products={products}
									onAddToCart={handleAddToCart}
								/>
							}
						/>
					</Routes>
				</section>
			</section>
		</Provider>
	);
}
