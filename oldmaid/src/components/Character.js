import React from 'react';

const Character = props => {
	const { character } = props;
	return (
		<>
			<img height="80px" src={character} alt="Eyes Without a FA-AACE" />
		</>
	);
};

export default Character;
