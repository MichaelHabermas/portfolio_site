import React, { useState } from 'react';
import '../cssFiles/App.css';
import styled from 'styled-components';
import { shuffledDeck1 } from './Deck.js';
import cardBack from '../assets/card_face_selected.png';
import cardFront from '../assets/card_face_norm.png';

const createOldMaidDeck = deck => deck.filter(card => card !== 'Qs' && card !== 'Qh' && card !== 'Qc');

const splitDeck = deck => {
	const half = Math.ceil(deck.length / 2);
	const halfOpponentHand = deck.slice(0, half);
	const halfPlayerHand = deck.slice(half, deck.length);

	const thePlayerHand = removeDoubles(halfPlayerHand);
	const theOpponentHand = removeDoubles(halfOpponentHand);
	return {
		//lets me export as a similar object to the default hands
		playerHand: thePlayerHand,
		opponentHand: theOpponentHand
	};
};

// const removeDoubles = hand => {
// 	const object = {};
// 	hand.forEach(card => {
// 		console.log(card);
// 		// if (object.card[0]) {
// 		if (object.hasOwnProperty(card[0])) {
// 			object.card[0] += 1;
// 		} else {
// 			object.card[0]: 1;
// 		}
// 	});
// 	// console.log(object);
// 	return object;
// };

const removeDoubles = hand => {
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
		if (newHandObject.key % 2 !== 0) newHand.push(key);
	}

	return newHand;
};

const MainApp = styled.div`
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(44deg, #e8ebf7, #acbed8, #bf0603);
		background-size: 600% 600%;
		-webkit-animation: AnimationName 33s ease infinite;
		-moz-animation: AnimationName 33s ease infinite;
		animation: AnimationName 33s ease infinite;
	}

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

function App() {
	const [hands, setHands] = useState(splitDeck(createOldMaidDeck(shuffledDeck1)));
	const [gameOver, setGameOver] = useState(false);
	let playerTurn = true;

	console.log('hands: ', hands);

	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];

		console.log('chosenCard: ', chosenCard);

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
			// console.log('GAME OVER');
			setGameOver(!gameOver);
			return;
		}
	};

	return (
		<MainApp>
			<div className="body">
				<h1>OLD MAID</h1>
				<div className={gameOver ? 'game-over' : 'no-see'}>GAME OVER</div>
				<div className={gameOver ? 'game-over' : 'no-see'}>
					{hands.playerHand.length === 0 ? 'Player Wins!' : 'Opponent Wins!'}
				</div>
				<div className="cards">
					<div
						className="hand opponentHand"
						onClick={() => {
							gameOver ? window.location.reload() : (playerTurn = true);
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
		</MainApp>
	);
}

export default App;
