import React from 'react';
import styled from 'styled-components';

import gameOverBackground from '../../assets/oldMaidAssets/game_over_background.png';
import gameOverLogo from '../../assets/oldMaidAssets/game_over_logo.png';
import playAgainBtn from '../../assets/oldMaidAssets/play_again_button.png';
import gameOverBanner from '../../assets/oldMaidAssets/game_over_banner.png';
import winLogo from '../../assets/oldMaidAssets/player_wins_logo.png';
import loseText from '../../assets/oldMaidAssets/better_luck_logo.png';

const GameOverScreenStyles = styled.div`
	height: 100%;
	background-image: url(${gameOverBackground});
	background-position: center;
	background-size: 100% 100%;

	.gameOverLogo {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.gameOverBanner {
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translate(-50%, 0%);
	}

	.gameOverMessage {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.play_again_btn {
		position: absolute;
		bottom: 10%;
		right: 8%;
		cursor: pointer;
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

const GameOverScreen = props => {
	const { handleNewGame, playerWon } = props;

	const handleClick = () => {
		handleNewGame();
	};

	return (
		<GameOverScreenStyles>
			<img
				className="gameOverLogo"
				src={gameOverLogo}
				alt="Game Over Logo"
			/>

			<div>
				<img
					className="gameOverBanner"
					src={gameOverBanner}
					alt="Game Over"
				/>
				<img
					className="gameOverMessage"
					src={playerWon ? winLogo : loseText}
					alt="Who Won?"
				/>
			</div>

			<div onClick={handleClick}>
				<img
					className="play_again_btn"
					src={playAgainBtn}
					alt="Play Again"
				/>
			</div>
		</GameOverScreenStyles>
	);
};

export default GameOverScreen;
