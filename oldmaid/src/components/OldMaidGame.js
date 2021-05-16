import React, { useState } from 'react';
import styled from 'styled-components';

//components
import ScoringNav from '../Navs/ScoringNav.js';
import { OldMaidDeckSetup } from './OldMaidDeckSetup.js';
//assets
import cardBack from '../assets/card_face_selected.png';
import cardFront from '../assets/card_face_norm.png';
import woman_1 from '../assets/woman_1.png';
import woman_2 from '../assets/woman_2.png';
import woman_3 from '../assets/woman_1.png';
import woman_4 from '../assets/woman_2.png';
import woman_5 from '../assets/woman_1.png';
import woman_6 from '../assets/woman_2.png';
import woman_7 from '../assets/woman_1.png';
import woman_8 from '../assets/woman_2.png';
import man_1 from '../assets/man_1.png';
import man_2 from '../assets/man_2.png';
import man_3 from '../assets/man_1.png';
import man_4 from '../assets/man_2.png';
import man_5 from '../assets/man_1.png';
import man_6 from '../assets/man_2.png';
import man_7 from '../assets/man_1.png';
import man_8 from '../assets/man_2.png';

const OMHands = OldMaidDeckSetup();
const characters = [
	woman_1,
	woman_2,
	woman_3,
	woman_4,
	woman_5,
	woman_6,
	woman_7,
	woman_8,
	man_1,
	man_2,
	man_3,
	man_4,
	man_5,
	man_6,
	man_7,
	man_8
];
// const initialScore = { yourScore: 0, theirScore: 0 };

const initialState = {
	score: { yourScore: 0, theirScore: 0 },
	hands: OMHands,
	gameOver: false
};

// styling
const OldMaidBody = styled.div`
	.body {
		/* display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: space-around; */
		width: 100vw;
		height: 84vh;
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
		/* border: 1px solid yellow; */
	}

	.hand > div {
		display: flex;
		justify-content: center;
		align-items: center;
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

export default function OldMaidGame() {
	const [oldMaidState, setOldMaidState] = useState(initialState);
	// const [hands, setHands] = useState(OMHands);
	// const [gameOver, setGameOver] = useState(false);
	// const [score, setScore] = useState(initialScore); // belongs in the Old Maid File
	console.log(oldMaidState);
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

		setOldMaidState({
			...oldMaidState,
			hands: {
				playerHand: playerTurn ? newChooserHand : newChooseeHand,
				opponentHand: playerTurn ? newChooseeHand : newChooserHand
			}
		});

		// if (newChooserHand < 1 || newChooseeHand < 1) {
		// 	setGameOver(!gameOver);
		// 	return;
		// }
	};

	// const handleScoreUpdate = () => {
	// 	console.log('its connected');
	// 	if (hands.playerHand.length === 0 && gameOver) {
	// 		console.log('its connected AAAA');
	// 		setScore({ ...score, yourScore: score.yourScore + 1 });
	// 		return 'Player Wins!';
	// 	}
	// 	if (hands.opponentHand.length === 0 && gameOver) {
	// 		console.log('its connected BBBB');
	// 		setScore({ ...score, theirScore: score.theirScore + 1 });
	// 		return 'Opponent Wins!';
	// 	}
	// };

	return (
		<>
			<ScoringNav gameName="Old Maid" oldMaidState={oldMaidState} setOldMaidState={setOldMaidState} />
			{/* score={score} setScore={setScore} */}
			<OldMaidBody>
				<div className="body">
					{/* <div className={gameOver ? 'game-over' : 'no-see'}>GAME OVER</div>
					<div className={gameOver ? 'game-over' : 'no-see'}>{handleScoreUpdate}</div> */}
					<div className="cards">
						<div
							className="hand opponentHand"
							onClick={() => {
								oldMaidState.gameOver ? window.location.reload() : (playerTurn = true); // the problem is HERE, with how I restarted the games
								takePlayerTurn(oldMaidState.hands.playerHand, oldMaidState.hands.opponentHand);
							}}
						>
							<img
								width="50px"
								src={characters[Math.floor(Math.random() * characters.length)]}
								alt="Eyes Without a FA-AACE"
							/>
							<div>
								{oldMaidState.hands.opponentHand.map(card => {
									return <div key={Math.random()} className="card opponentCard" value={card}></div>;
								})}
							</div>
						</div>
						<div
							className="hand playerHand"
							onClick={() => {
								oldMaidState.gameOver ? window.location.reload() : (playerTurn = false);
								takePlayerTurn(oldMaidState.hands.opponentHand, oldMaidState.hands.playerHand);
							}}
						>
							<div>
								{oldMaidState.hands.playerHand.map(card => {
									return (
										<div key={Math.random()} className="card playerCard">
											{card}
										</div>
									);
								})}
							</div>

							<img
								height="50px"
								src={characters[Math.floor(Math.random() * characters.length)]}
								alt="Eyes Without a FA-AACE"
							/>
						</div>
					</div>
				</div>
			</OldMaidBody>
		</>
	);
}
