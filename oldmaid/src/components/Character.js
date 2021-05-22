import React from 'react';
import styled from 'styled-components';

const CharStyle = styled.div`
	.face {
		height: 6rem;
	}

	.back {
		border: 7px solid white;
		border-radius: 50%;
		height: 9rem;
		width: 9rem;
		margin: 5px;
		display: grid;
		place-items: center;
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
