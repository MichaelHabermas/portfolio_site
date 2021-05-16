import React from 'react';
import { Link } from 'react-router-dom';

const StartScreen = () => {
	return (
		<>
			<h1>Start</h1>

			<Link to="/old-maid/gamescreen">
				<button>Start Game</button>
			</Link>
		</>
	);
};

export default StartScreen;
