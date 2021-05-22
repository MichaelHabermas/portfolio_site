import React from 'react';
import styled from 'styled-components';

const CharStyle = styled.div`
	.face {
		height: 10vh;
		margin: 15px;
		padding: 1px;
	}

	.back {
		border: 7px solid white;
		border-radius: 50%;
		margin: 5px;
	}
`;

const Character = props => {
	const { character } = props;
	return (
		<CharStyle>
			<div className="back" style={{ backgroundColor: character.color }}>
				<img className="face" src={character.image} alt="Eyes Without a FA-AACE" />
			</div>
		</CharStyle>
	);
};

export default Character;
