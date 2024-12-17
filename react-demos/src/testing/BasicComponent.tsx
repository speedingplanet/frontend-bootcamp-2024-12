import React, { useState } from 'react';
// import classes from './BasicComponent.module.css';

function BasicComponent() {
	const [favorite, setFavorite] = useState('');

	function handleFavorite(event: React.ChangeEvent<HTMLInputElement>) {
		setFavorite(event.currentTarget.value);
	}

	return (
		<div>
			<div>
				{/* <label for="some-id">Whatever</label> */}
				<label htmlFor="favorite-fruit">Add your favorite fruit:</label>
				<input
					type="text"
					name="favFruit"
					id="favorite-fruit"
					onChange={handleFavorite}
					value={favorite}
				/>
			</div>
			<ul>
				<li>Apples</li>
				{/* <li class="clickable">Click me</li> */}
				{/* <li className={classes.bananas}>Bananas</li> */}
				<li>Bananas</li>
				<li>Peaches</li>
				<li data-testid="oranges">Oranges</li>
				<li>{favorite}</li>
			</ul>
		</div>
	);
}

export default BasicComponent;
