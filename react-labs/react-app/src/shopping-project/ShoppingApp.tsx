import './shopping-project.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import DisplayShoppingCart from './DisplayShoppingCart';
import ProductBrowser from './ProductBrowser';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from './shopping-dao';
import { Product } from './shopping-types';

export default function ShoppingApp() {
	const [products, setProducts] = useState<Array<Product>>([]);

	useEffect(() => {
		const getData = async () => {
			let products = await fetchAllProducts();
			setProducts(products);
		};

		getData().catch((error) => {
			console.error('DAO error handled at the UI level:', error);
		});
	}, []);

	function handleAddToCart(product: Product) {}

	return (
		<section>
			<header>
				<h1>Unnamed Shopping App</h1>
			</header>
			<nav className="shopping-navbar">
				<ul>
					<li>
						<NavLink to="/shopping/cart">Cart</NavLink>
					</li>
					<li>
						<NavLink to="/shopping/browse">Browse Products</NavLink>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route
						path="cart"
						element={<DisplayShoppingCart />}
					/>
					<Route
						path="browse"
						element={<ProductBrowser products={products} onAddToCart={handleAddToCart}/>}
					/>
				</Routes>
			</section>
		</section>
	);
}
