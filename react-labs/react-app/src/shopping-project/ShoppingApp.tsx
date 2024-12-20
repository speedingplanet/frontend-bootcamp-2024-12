import './shopping-project.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import DisplayShoppingCart from './DisplayShoppingCart';
import ProductBrowser from './ProductBrowser';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from './shopping-dao';
import { Cart, Product } from './shopping-types';
import { createCart } from './cart-tools';
import ShowCartLink from './ShowCartLink';

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

	console.log('Items in cart: ', cart.items.length)

	function handleAddToCart(product: Product) {
		cart.items.push({ product, quantity: 1 });
		setCart({ ...cart });
	}

	return (
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
						element={<DisplayShoppingCart />}
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
	);
}
