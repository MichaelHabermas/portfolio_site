import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import StartScreenBkRnd from '../../assets/OldMaidAssets/StartBackground.png';
import OldMaidLogo from '../../assets/OldMaidAssets/OldMaidLogo.png';
import StartButton from '../../assets/OldMaidAssets/StartButton.png';
import cow_1 from '../../assets/OldMaidAssets/Cow_1.png';
import cow_2 from '../../assets/OldMaidAssets/Cow_1-1.png';

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
		top: 63%;
		left: 20%;
		transform: translate(-50%, -50%);
	}

	.cow2 {
		position: absolute;
		top: 69%;
		left: 80%;
		transform: translate(-50%, -50%);
	}
`;

const StartScreen = () => {
	return (
		<StartScreenStyles>
			<img className="main_logo" src={OldMaidLogo} alt="Start Logo" />
			<img className="cow1" src={cow_1} alt="cow" />
			<img className="cow2" src={cow_2} alt="cow" />
			<Link to="/old-maid/gamescreen">
				{/* <button>Start Game</button> */}
				<img className="start_btn" src={StartButton} alt="Start Logo" />
			</Link>
		</StartScreenStyles>
	);
};

export default StartScreen;
