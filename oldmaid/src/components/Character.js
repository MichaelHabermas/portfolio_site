import React from 'react';
import styled from 'styled-components';

const CharStyle = styled.div`
	.face {
		height: 10vh;
		margin: 15px;
	}
`;

const Character = props => {
	const { character } = props;
	return (
		<CharStyle>
			<img className="face" src={character} alt="Eyes Without a FA-AACE" />
		</CharStyle>
	);
};

export default Character;
