import React from 'react';

export default function CharacterCard({
	character,
	setCurrentChar,
	currentColor
}) {
	const handleClick = () => {
		setCurrentChar(character);
	};

	return (
		<div>
			<img onClick={handleClick} src={character.image} alt="character" />
		</div>
	);
}
