import './shopping-project.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { ProductBrowser } from './ProductBrowser';

export default function ShoppingApp() {
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
						element={<ShoppingCart />}
					/>
					<Route
						path="browse"
						element={<ProductBrowser />}
					/>
				</Routes>
			</section>
		</section>
	);
}