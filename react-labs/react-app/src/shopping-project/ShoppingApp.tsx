import './shopping-project.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShoppingCart from './ShoppingCart';
import { ProductBrowser } from './ProductBrowser';
import { ProductBrowserUseEffect } from './ProductBrowserUseEffect';
import { ProductBrowserReactQuery } from './ProductBrowserReactQuery';

export default function ShoppingApp() {
	const shoppingClient = new QueryClient();

	return (
		<QueryClientProvider client={shoppingClient}>
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
							<NavLink to="/shopping/browse">Browse Products (static data)</NavLink>
						</li>
						<li>
							<NavLink to="/shopping/browse-useeffect">Browse Products (useEffect)</NavLink>
						</li>
						<li>
							<NavLink to="/shopping/browse-reactquery">Browse Products (React Query)</NavLink>
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
						<Route
							path="browse-useeffect"
							element={<ProductBrowserUseEffect />}
						/>
						<Route
							path="browse-reactquery"
							element={<ProductBrowserReactQuery />}
						/>
					</Routes>
				</section>
			</section>
		</QueryClientProvider>
	);
}
