import React from 'react';
import { useHistory } from 'react-router-dom';

const GameOverScreen = props => {
	const { handleNewGame } = props;
	const { push } = useHistory();

	const handleClick = () => {
		handleNewGame();
		// push('/old-maid/gamescreen');
	};

	return (
		<>
			<h1>Game Over</h1>
			<button
				onClick={() => {
					handleClick();
					push('/old-maid/gamescreen');
				}}
			>
				Play Again?
			</button>
		</>
	);
};

export default GameOverScreen;
