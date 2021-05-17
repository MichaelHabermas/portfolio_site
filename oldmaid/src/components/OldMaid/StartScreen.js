import React from 'react';
import styled from 'styled-components';

import StartScreenBkRnd from '../../assets/OldMaidAssets/StartBackground.png';
import OldMaidLogo from '../../assets/OldMaidAssets/OldMaidLogo.png';
import StartButton from '../../assets/OldMaidAssets/StartButton.png';
import cow_1 from '../../assets/OldMaidAssets/Cow_1.png';
import milkmaid from '../../assets/OldMaidAssets/milkmaid.png';

const StartScreenStyles = styled.div`
	height: 100%;
	background-image: url(${StartScreenBkRnd});
	background-position: center;
	background-size: 100% 100%;

	.main_logo {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.start_btn {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.cow1 {
		position: absolute;
		bottom: 20%;
		left: 15%;
	}

	.milkmaid {
		position: absolute;
		bottom: 15%;
		right: 15%;
	}
`;

const StartScreen = props => {
	const { handleNewGame } = props;

	const handleClick = () => {
		handleNewGame();
	};
	return (
		<StartScreenStyles>
			<img className="main_logo" src={OldMaidLogo} alt="Start Logo" />
			<img className="cow1" src={cow_1} alt="cow" />
			<img className="milkmaid" src={milkmaid} alt="milkmaid" />
			<img onClick={handleClick} className="start_btn" src={StartButton} alt="Start Logo" />
		</StartScreenStyles>
	);
};

export default StartScreen;
