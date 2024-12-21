import { useQuery, gql } from '@apollo/client';
import { Product } from '../demo-types';

const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			id
			name
			price
			department
			rating
		}
	}
`;

export default function ProductsQuery() {
	const response = useQuery<{ products: Product[] }>(GET_PRODUCTS);

	if (response.loading) return <p>Loading...</p>;

	// Some kind of error
	if (response.error) return <p>Error : {response.error.message}</p>;

	// Empty data set
	if (!response.data) return <span>No data found.</span>;

	return (
		<div className="row">
			<div className="col">
				<header>
					<h3>Querying Products</h3>
				</header>
				<ul>
					{
						response.data.products.map(product => <li>{product.name}</li>)
					}
				</ul>
			</div>
		</div>
	);
}
