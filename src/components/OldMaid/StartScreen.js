import React from 'react';
import styled from 'styled-components';

import StartScreenBkRnd from '../../assets/oldMaidAssets/start_background.png';
import OldMaidLogo from '../../assets/oldMaidAssets/old_maid_logo.png';
import StartButton from '../../assets/oldMaidAssets/start_button.png';
import cow_1 from '../../assets/oldMaidAssets/cow_cards_a.png';
import milkmaid from '../../assets/oldMaidAssets/milk_maid.png';

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

	// MEDIA QUERIES
	@media only screen and (max-width: 425px) {
	}
	@media only screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media only screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media only screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
	}
	@media only screen and (min-width: 1500px) {
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
