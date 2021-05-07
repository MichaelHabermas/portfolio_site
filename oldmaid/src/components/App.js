import React, { useState } from 'react';
import styled from 'styled-components';

import '../cssFiles/App.css';
//components
import NavBarMain from './NavBarMain.js';
import ScoringNav from './ScoringNav.js';
import { shuffledDeck1 } from './Deck.js';
//assets
import cardBack from '../assets/card_face_selected.png';
import cardFront from '../assets/card_face_norm.png';

// styling
const OldMaidBody = styled.div`
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		// these are for the fading background colors
		background: linear-gradient(44deg, #0060aa, #ffed10, #e20025, #010101);
		background-size: 600% 600%;
		-webkit-animation: AnimationName 10s ease infinite;
		-moz-animation: AnimationName 10s ease infinite;
		animation: AnimationName 10s ease infinite;
	}
	// these are for the fading background colors
	@-webkit-keyframes AnimationName {
		0% {
			background-position: 26% 0%;
		}
		50% {
			background-position: 75% 100%;
		}
		100% {
			background-position: 26% 0%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 26% 0%;
		}
		50% {
			background-position: 75% 100%;
		}
		100% {
			background-position: 26% 0%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 26% 0%;
		}
		50% {
			background-position: 75% 100%;
		}
		100% {
			background-position: 26% 0%;
		}
	}

	h1 {
		font-size: 3rem;
		color: rebeccapurple;
		margin: 2rem;
	}

	// gameplay element styling
	.cards {
		/* border: 1px solid rebeccapurple; */
	}

	.hand {
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1px solid yellow; */
	}

	.card {
		/* border: 1px solid black; */
		padding: 1rem 0;
		width: 60px;
		height: 80px;
		font-size: 2rem;
		text-align: center;
		color: white;
		margin: 0.1rem;
		text-shadow: 1px 1px 0 black;
		/* border-radius: 10px; */
	}

	.opponentHand,
	.playerHand {
		cursor: pointer;
		padding: 20px;
	}

	.opponentCard {
		background-image: url(${cardBack});
		background-repeat: no-repeat;
		background-size: auto 100%;
		background: cover / center;
	}

	.playerCard {
		background-image: url(${cardFront});
		background-repeat: no-repeat;
		background-size: auto 100%;
		background: cover / center;
	}

	// win condition
	.game-over {
		font-size: 5rem;
		padding: 2rem;
	}

	.no-see {
		display: none;
	}
`;

// ##### deck setup for Old Maid #####
// takes out 3 of the Queens from the deck
const createOldMaidDeck = deck => deck.filter(card => card !== 'Qs' && card !== 'Qh' && card !== 'Qc');

// filters an array of cards to remove pairs, but leave "odd man out" cards
const removePairs = hand => {
	const newHandObject = {};
	const newHand = [];

	hand.forEach(card => {
		if (newHandObject[card[0]]) {
			newHandObject[card[0]] += 1;
		} else {
			newHandObject[card[0]] = 1;
		}
	});

	for (let key in newHandObject) {
		if (newHandObject[key] % 2 !== 0) newHand.push(key);
	}

	return newHand;
};

// splits the deck in half, removes pairs from each hand, and returns the 2 player's hands as objects
const splitDeck = deck => {
	const half = Math.ceil(deck.length / 2);
	const halfOpponentHand = deck.slice(0, half);
	const halfPlayerHand = deck.slice(half, deck.length);

	const thePlayerHand = removePairs(halfPlayerHand);
	const theOpponentHand = removePairs(halfOpponentHand);

	// creates and returns the initial set of hands for the start of the game
	return {
		playerHand: thePlayerHand,
		opponentHand: theOpponentHand
	};
};

function App() {
	const [hands, setHands] = useState(splitDeck(createOldMaidDeck(shuffledDeck1)));
	const [gameOver, setGameOver] = useState(false);

	const [score, setScore] = useState({ yourScore: 0, theirScore: 0 }); // belongs in the Old Maid File

	let playerTurn = true;

	// handles each player taking their turn
	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];

		let newChooseeHand;
		let newChooserHand;

		if (chosenCard[0] === 'Q') {
			// console.log('situationA');
			newChooseeHand = [...choosee.filter(item => item[0] !== 'Q')];
			newChooserHand = [...chooser, 'Q'];
		} else {
			newChooseeHand = [...choosee.filter(item => item[0] !== chosenCard[0])];
			newChooserHand = [...chooser.filter(item => item[0] !== chosenCard[0])];
		}

		setHands({
			playerHand: playerTurn ? newChooserHand : newChooseeHand,
			opponentHand: playerTurn ? newChooseeHand : newChooserHand
		});

		if (newChooserHand < 1 || newChooseeHand < 1) {
			setGameOver(!gameOver);
			return;
		}
	};

	const handleScoreUpdate = () => {
		console.log('its connected');
		if (hands.playerHand.length === 0 && gameOver) {
			console.log('its connected AAAA');
			setScore({ ...score, yourScore: score.yourScore + 1 });
			return 'Player Wins!';
		}
		if (hands.opponentHand.length === 0 && gameOver) {
			console.log('its connected BBBB');
			setScore({ ...score, theirScore: score.theirScore + 1 });
			return 'Opponent Wins!';
		}
	};

	return (
		<>
			<NavBarMain />
			<ScoringNav gameName="Old Maid" score={score} />
			<OldMaidBody>
				<div className="body">
					<h1>OLD MAID</h1>
					<div className={gameOver ? 'game-over' : 'no-see'}>GAME OVER</div>
					<div className={gameOver ? 'game-over' : 'no-see'}>{handleScoreUpdate}</div>
					<div className="cards">
						<div
							className="hand opponentHand"
							onClick={() => {
								gameOver ? setTimeout(() => window.location.reload(), 3000) : (playerTurn = true); // the problem is HERE, with how I restarted the games
								takePlayerTurn(hands.playerHand, hands.opponentHand);
							}}
						>
							Opponent Hand:
							{hands.opponentHand.map(card => {
								return <div key={Math.random()} className="card opponentCard" value={card}></div>;
							})}
						</div>
						<div
							className="hand playerHand"
							onClick={() => {
								gameOver ? window.location.reload() : (playerTurn = false);
								takePlayerTurn(hands.opponentHand, hands.playerHand);
							}}
						>
							Player Hand:
							{hands.playerHand.map(card => {
								return (
									<div key={Math.random()} className="card playerCard">
										{card}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</OldMaidBody>
		</>
	);
}

export default App;
