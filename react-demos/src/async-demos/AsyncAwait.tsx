import React, { useEffect, useState } from 'react';
import { Country } from '../demo-types';
import { fetchAllCountries } from './countries-dao';

function AsyncAwait() {
	const [countries, setCountries] = useState<Country[]>([]);
	const [refresh, setRefresh] = useState(0);

	// useEffect(function, dependencies[])
	// Pass it a function to run and a list of dependencies
	// One-time data request
 	useEffect(() => {
		async function getData() {
			/*
			Normally, async-await should be in a try-catch block, but we will
			catch any errors externally to this function.
			*/
			let countries = await fetchAllCountries();
			setCountries(countries);
		}

		// Errors are handled here
		getData().catch((error) => {
			console.error('async-await: Could not fetch data:', error);
		});

		return function () {
			console.log('useEffect finished');
		};
	}, [refresh]); // Empty dependencies fetches data once

	return (
		<div className="row">
			<div className="col">
				<h3>Async with async-await</h3>
				<button
					className="btn btn-danger"
					onClick={() => setRefresh(refresh + 1)}
				>
					Refresh Data
				</button>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Country</th>
							<th>Population</th>
						</tr>
					</thead>
					<tbody>
						{countries.map((country) => (
							<tr key={country.id}>
								<td>{country.country}</td>
								<td>{country.pop2022}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AsyncAwait;
