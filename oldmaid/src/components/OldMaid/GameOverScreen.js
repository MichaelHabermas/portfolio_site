import React from 'react';
import styled from 'styled-components';

import gameOverBackground from '../../assets/OldMaidAssets/GameOverBackground.png';
import gameOverLogo from '../../assets/OldMaidAssets/GameOverLogo.png';
import playAgainBtn from '../../assets/OldMaidAssets/PlayAgainBtn.png';
import gameOverBanner from '../../assets/OldMaidAssets/GameOverBanner.png';
import winLogo from '../../assets/OldMaidAssets/PlayerWinsLogo.png';
import loseText from '../../assets/OldMaidAssets/BetterLuckNextTimeLogo.png';

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

	.start_btn {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.gameOverBanner {
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translate(-50%, 0%);
	}

	.gameOverMessage {
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.play_again_btn {
		position: absolute;
		bottom: 5%;
		right: 5%;
		/* transform: translate(-50%, -50%); */
	}
`;

const GameOverScreen = props => {
	const { handleNewGame, playerWon } = props;

	const handleClick = () => {
		handleNewGame();
	};

	return (
		<GameOverScreenStyles>
			<img className="gameOverLogo" src={gameOverLogo} alt="Game Over Logo" />

			<div>
				<img className="gameOverBanner" src={gameOverBanner} alt="Game Over" />
				<img className="gameOverMessage" src={playerWon ? winLogo : loseText} alt="Who Won?" />
			</div>

			<div onClick={handleClick}>
				<img className="play_again_btn" src={playAgainBtn} alt="Play Again" />
			</div>
		</GameOverScreenStyles>
	);
};

export default GameOverScreen;
