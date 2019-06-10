import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const Search = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [animal, setAnimal] = useState('dog');
	const [breed, setBreed] = useState('');
	const [breeds, setBreeds] = useState([]);

	return (
		<React.Fragment>
			<form>
				<div>
					<label htmlFor="location">
						Location
						<input
							id="location"
							onChange={(e) => setLocation(e.target.value)}
							className="form-control"
							placeholder="where"
							value={location}
						/>
					</label>
					<br />

					<lable htmlFor="animal">
						Animal
						<select
							id="animal"
							value={animal}
							onChange={(e) => setAnimal(e.target.value)}
							onBlur={(e) => setAnimal(e.target.value)}>
							<option>All</option>
							{ANIMALS.map((animal) => (
								<option key={animal} value={animal}>
									{animal}
								</option>
							))}
						</select>
					</lable>
					<br />

					<lable htmlFor="breed">
						Breed
						<select
							id="breed"
							value={breed}
							onChange={(e) => setBreed(e.target.value)}
							onBlur={(e) => setBreed(e.target.value)}
							disabled={breeds.length === 0}>
							<option>All</option>
							{breeds.map((breed) => (
								<option key={breed} value={breed}>
									{breed}
								</option>
							))}
						</select>
					</lable>
					<br />

					<h1>{animal}</h1>
					<button className="btn btn-primary">Search</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default Search;
