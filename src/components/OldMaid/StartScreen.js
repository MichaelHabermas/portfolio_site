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
	@media (max-width: 425px) {
	}
	@media (max-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media (max-width: 641px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media (max-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media (min-width: 1281px) {
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
