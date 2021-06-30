import React from 'react';
import styled from 'styled-components';

import gameOverBackground from '../../assets/oldMaidAssets/GameOverBackground.png';
import gameOverLogo from '../../assets/oldMaidAssets/GameOverLogo.png';
import playAgainBtn from '../../assets/oldMaidAssets/PlayAgainBtn.png';
import gameOverBanner from '../../assets/oldMaidAssets/GameOverBanner.png';
import winLogo from '../../assets/oldMaidAssets/PlayerWinsLogo.png';
import loseText from '../../assets/oldMaidAssets/BetterLuckNextTimeLogo.png';

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
