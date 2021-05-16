import React, { useState } from 'react';
// import { Route, Link, NavLink, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';

import styled from 'styled-components';

//components
import ScoringNav from '../../Navs/ScoringNav.js';
import StartScreen from './StartScreen';
// import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';
import { OldMaidDeckSetup } from './OldMaidDeckSetup.js';
import Player from '../Player.js';
import Character from '../Character.js';

//assets
import cardBack from '../../assets/card_face_selected.png';
import cardFront from '../../assets/card_face_norm.png';
import charactersArray from '../../assets/characters/Characters';
import PairedCards from './pairAnimation.js';

const newGameHands = OldMaidDeckSetup();

const initialState = {
	gameName: 'Old Maid',
	score: { yourScore: 0, theirScore: 0 },
	hands: newGameHands,
	gameOver: false,
	playerCharacter: {
		user: charactersArray[Math.floor(Math.random() * charactersArray.length)],
		computer: charactersArray[Math.floor(Math.random() * charactersArray.length)]
	},
	playerTurn: true
};

// styling
const OldMaidBody = styled.div`
	.body {
		width: 100vw;
		height: 84vh;
		// these are for the fading background colors
		background: linear-gradient(44deg, #00c9ff, #92fe9d);
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

	// game play element styling
	.cards {
		border: 1px solid rebeccapurple;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: space-around;
	}

	.hand {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hand > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.opponentHand,
	.playerHand {
		cursor: pointer;
		padding: 20px;
	}

	.centered {
		position: absolute;
		top: 50%;
		width: 100%;
	}

	.card {
		padding: 1rem 0;
		width: 60px;
		height: 80px;
		font-size: 2rem;
		text-align: center;
		color: white;
		margin: 0.1rem;
		text-shadow: 1px 1px 0 black;
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

export default function OldMaidGame() {
	const [oldMaidState, setOldMaidState] = useState(initialState);
	const { push } = useHistory();
	const [paired, setPaired] = useState([])

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
			setPaired([...paired, chosenCard]);
			newChooseeHand = [...choosee.filter(item => item[0] !== chosenCard[0])];
			newChooserHand = [...chooser.filter(item => item[0] !== chosenCard[0])];
		}
		setOldMaidState({
			...oldMaidState,
			hands: {
				playerHand: oldMaidState.playerTurn ? newChooserHand : newChooseeHand,
				opponentHand: oldMaidState.playerTurn ? newChooseeHand : newChooserHand
			},
			playerTurn: !oldMaidState.playerTurn,
			gameOver: newChooserHand.length < 1 || newChooseeHand.length < 1 ? true : false
		});
	};

	const handleGameOver = () => {
		handleScoreUpdate();
		setPaired([]);
		push('/old-maid/gameoverscreen');
	};

	const handleScoreUpdate = () => {
		if (oldMaidState.hands.playerHand.length === 0) {
			setOldMaidState({
				...oldMaidState,
				score: {
					yourScore: oldMaidState.score.yourScore + 1,
					theirScore: oldMaidState.score.theirScore
				},
				gameOver: false
			});
		} else {
			setOldMaidState({
				...oldMaidState,
				score: {
					yourScore: oldMaidState.score.yourScore,
					theirScore: oldMaidState.score.theirScore + 1
				},
				gameOver: false
			});
		}
	};

	const handleNewGame = () => {
		const newHands = OldMaidDeckSetup();
		setOldMaidState({
			...oldMaidState,
			hands: newHands,
			playerTurn: true
		});
	};

	// resets scores from the scoring nav
	const resetScore = e => {
		setOldMaidState({
			...oldMaidState,
			score: {
				yourScore: 0,
				theirScore: 0
			}
		});
	};

	if (oldMaidState.gameOver) handleGameOver();

	return (
		<>
			<ScoringNav gameState={oldMaidState} resetScore={resetScore} />
			<OldMaidBody>
				<div className="body">
					<Route path="/old-maid/startscreen">
						<StartScreen />
					</Route>

					<Route path="/old-maid/gamescreen">
						<div className="centered">
							<PairedCards paired={paired} />
						</div>
						<div className="cards">
							<div
								className="hand opponentHand"
								onClick={() => {
									oldMaidState.playerTurn
										? console.log('not my turn')
										: takePlayerTurn(
												oldMaidState.hands.opponentHand,
												oldMaidState.hands.playerHand
										  );
								}}
							>
								<Character character={oldMaidState.playerCharacter.computer} />
								<Player
									playerHand={oldMaidState.hands.opponentHand}
									isUser={false}
									classNames="card opponentCard"
								/>
							</div>
							<div
								className="hand playerHand"
								onClick={() => {
									oldMaidState.playerTurn
										? takePlayerTurn(oldMaidState.hands.playerHand, oldMaidState.hands.opponentHand)
										: console.log('not my turn');
								}}
							>
								<Player
									playerHand={oldMaidState.hands.playerHand}
									isUser={true}
									classNames="card playerCard"
								/>
								<Character character={oldMaidState.playerCharacter.user} />
							</div>
						</div>
					</Route>

					<Route path="/old-maid/gameoverscreen">
						<GameOverScreen handleNewGame={handleNewGame} />
					</Route>
				</div>
			</OldMaidBody>
		</>
	);
}
