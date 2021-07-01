import React, { useState } from 'react';
import Characters from '../../assets/characters/Characters';
import Character from '../Character';

export default function CharSelect() {
	const [currentChar, setCurrentChar] = useState();
	const [currentColor, setCurrentColor] = useState();

	const handleChange = e => {
		setCurrentColor(e.target.value);
	};

	return (
		<React.Fragment>
			<div>
				<div className="current-character">
					<img src={currentChar} alt="character" />
				</div>
				<div className="characters">
					<h2>Choose Character</h2>
					<div>
						{Characters.map(character => {
							return (
								<Character
									character={{
										image: character,
										color: currentColor
									}}
									setCurrentChar={setCurrentChar}
									currentColor={currentColor}
								/>
							);
						})}
					</div>
				</div>
				<div className="colors">
					<h2>Choose a color</h2>
					<input
						type="color"
						value={currentColor}
						onChange={handleChange}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
