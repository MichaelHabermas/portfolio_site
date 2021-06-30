import React from 'react';
import styled from 'styled-components';

import StartScreenBkRnd from '../../assets/oldMaidAssets/StartBackground.png';
import OldMaidLogo from '../../assets/oldMaidAssets/OldMaidLogo.png';
import StartButton from '../../assets/oldMaidAssets/StartButton.png';
import cow_1 from '../../assets/oldMaidAssets/Cow_1.png';
import milkmaid from '../../assets/oldMaidAssets/milkmaid.png';

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
		cursor: pointer;
	}

	.cow1 {
		position: absolute;
		bottom: 17%;
		left: 13%;
		transform: scale(0.7);
	}

	.milkmaid {
		position: absolute;
		bottom: 20%;
		right: 15%;
		transform: scale(0.9);
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
			<img
				onClick={handleClick}
				className="start_btn"
				src={StartButton}
				alt="Start Logo"
			/>
		</StartScreenStyles>
	);
};

export default StartScreen;
