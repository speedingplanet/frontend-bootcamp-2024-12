import ProductBrowserRow from './ProductBrowserRow';
import { Product } from './shopping-types';

interface Props {
	onAddToCart: (product: Product) => void;
	products: Array<Product>
}

const ProductBrowser = ({products, onAddToCart}: Props) => {
	return (
		<>
			<h3>Product Browser</h3>
			<p>Redux for state management</p>
			<div className="shopping-browser">
				<div className="browser-header-row">
					<div>Name</div>
					<div>Price</div>
					<div>Material</div>
					<div>Department</div>
					<div>&nbsp;</div>
				</div>
				{products.map((product) => (
					<ProductBrowserRow product={product} onAddToCart={onAddToCart} key={product.id} />
				))}
			</div>
		</>
	);
};

export default ProductBrowser;