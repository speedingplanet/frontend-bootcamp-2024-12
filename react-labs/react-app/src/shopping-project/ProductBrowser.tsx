import { Product } from './shopping-types';

interface Props {
	onAddToCart: (product: Product) => void;
	products: Array<Product>
}

const ProductBrowser = ({products, onAddToCart}: Props) => {
	return (
		<>
			<h3>Product Browser</h3>
			<p>Plain React for state management, <code>useEffect</code> for fetching data</p>
			<div className="shopping-browser">
				<div className="browser-header-row">
					<div>Name</div>
					<div>Price</div>
					<div>Material</div>
					<div>Department</div>
					<div>&nbsp;</div>
				</div>
				{products.map((product) => (
					<div
						className="browser-body-row"
						key={product.id}
					>
						<div>{product.name}</div>
						<div>{product.price}</div>
						<div>{product.material}</div>
						<div>{product.department}</div>
						<div><button type="button" className="btn btn-danger" onClick={() => onAddToCart(product)}>Add to cart</button></div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductBrowser;