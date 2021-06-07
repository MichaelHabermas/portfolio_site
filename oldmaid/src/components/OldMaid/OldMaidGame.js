import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';


//components
import ScoringNav from '../../Navs/ScoringNav.js';
import StartScreen from './StartScreen';
import GameOverScreen from './GameOverScreen';
// import { OldMaidDeckSetup } from './OldMaidDeckSetup.js';
import Player from '../Player.js';
import Character from '../Character.js';
import CharSelect from './CharSelect';

//assets
// game screen assets
import cardBack from '../../assets/card_face_selected.png';
import cardFront from '../../assets/card_face_norm.png';
// import charactersArray from '../../assets/characters/Characters';
import CowTilt from '../../assets/OldMaidAssets/CowTilt.png';
import tree1 from '../../assets/OldMaidAssets/tree1.png';
import tree2 from '../../assets/OldMaidAssets/tree2.png';
// import PlayerCircle1 from '../../assets/OldMaidAssets/PlayerCircle1.png';
// import PlayerCircle2 from '../../assets/OldMaidAssets/PlayerCircle2.png';
import PairedCards from './pairAnimation.js';

//actions
import { newGame, resetScore, increaseUserWinScore, increaseComputerWinScore, settleTurn } from '../../actions/oldmaidActions';

// const initialState = {
// 	gameName: 'Old Maid',
// 	score: { yourScore: 0, theirScore: 0 },
// 	hands: OldMaidDeckSetup(),
// 	gameOver: false,
// 	playerCharacter: {
// 		user: {
// 			image: charactersArray[Math.floor(Math.random() * charactersArray.length)],
// 			color: '#111111'
// 		},
// 		computer: {
// 			image: charactersArray[Math.floor(Math.random() * charactersArray.length)],
// 			color: '#999999'
// 		}
// 	},
// 	playerTurn: true
// };

// styling
const OldMaidBody = styled.div`
	.body {
		width: 100vw;
		height: 84vh;
		// these are for the fading background colors
		background: linear-gradient(to bottom, #97c53c, #ccdf69);
		background-size: 600% 600%;
		/* -webkit-animation: AnimationName 10s ease infinite;
		-moz-animation: AnimationName 10s ease infinite;
		animation: AnimationName 10s ease infinite; */
	}
	// these are for the fading background colors
	/* @-webkit-keyframes AnimationName {
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
	} */

	/* h1 { */
	/* font-size: 3rem; */
	/* color: rebeccapurple; */
	/* margin: 2rem; */
	/* } */

	// gameplay background styling
	.tree {
		position: absolute;
	}
	.tree1 {
		top: 5%;
		left: 5%;
		transform: translate(-50%, -50%);
	}
	.tree2 {
		top: 50%;
		right: 5%;
		transform: translate(-50%, -50%);
	}
	.CowTilt {
		position: absolute;
		top: 60%;
		right: 11%;
		transform: translate(-50%, -50%);
	}
	.tree3 {
		top: 80%;
		left: 25%;
		transform: translate(-50%, -50%);
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

const OldMaidGame = (props) => {
	const { oldmaid, dispatch } = props
	// const [oldMaidState, setOldMaidState] = useState(initialState);
	const { push } = useHistory();
	const [paired, setPaired] = useState([]);
	const [lastPaired, setLastPaired] = useState('');

	// handles each player taking their turn
	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];

		let newChooseeHand;
		let newChooserHand;

		setLastPaired(chosenCard);

		if (chosenCard[0] === 'Q') {
			// console.log('situationA');
			newChooseeHand = [...choosee.filter(item => item[0] !== 'Q')];
			newChooserHand = [...chooser, 'Q'];
		} else {
			setPaired([...paired, chosenCard]);
			newChooseeHand = [...choosee.filter(item => item[0] !== chosenCard[0])];
			newChooserHand = [...chooser.filter(item => item[0] !== chosenCard[0])];
		}
		// setOldMaidState({
		// 	...oldMaidState,
		// 	hands: {
		// 		playerHand: oldMaidState.playerTurn ? newChooserHand : newChooseeHand,
		// 		opponentHand: oldMaidState.playerTurn ? newChooseeHand : newChooserHand
		// 	},
		// 	playerTurn: !oldMaidState.playerTurn,
		// 	gameOver: newChooserHand.length < 1 || newChooseeHand.length < 1 ? true : false
		// });

		//new settle turn
		dispatch(settleTurn({newChooseeHand: newChooseeHand, newChooserHand: newChooserHand}))
	};

	// resets relevant data for an new game
	//READY FOR FIRST TEST!!!
	const handleNewGame = () => {
		// setOldMaidState({
		// 	...oldMaidState,
		// 	hands: OldMaidDeckSetup(),
		// 	playerTurn: true
		// });
		dispatch(newGame());
		setPaired([]);
		// push('/old-maid/character-select');
		push('/old-maid/gamescreen');
	};
	
	// resets scores from the scoring nav
	// READY FOR FIRST TEST!!!
	const isUserWinning = () => {
		return oldmaid.hands.playerHand.length > oldmaid.hands.opponentHand;
	};

	// resets scores from the scoring nav
	// READY FOR FIRST TEST!!!
	const handleResetScore = () => {
		dispatch(resetScore())
		// setOldMaidState({
		// 	...oldMaidState,
		// 	score: {
		// 		yourScore: 0,
		// 		theirScore: 0
		// 	}
		// });
	};
		// handles the end of game transition
	//READY FOR FIRST TEST!!!
	const handleGameOver = () => {
		// handleScoreUpdate();
		setPaired([]);
		
			handleScoreUpdate();
			push('/old-maid/gameoverscreen');
		
	};

	// updates score in OM Nav on game over
	//READY FOR FIRST TEST!!!
	const handleScoreUpdate = () => {
		if (oldmaid.hands.playerHand.length === 0) {
			dispatch(increaseUserWinScore())
		} else {
			dispatch(increaseComputerWinScore())
		}
	};

	// READY FOR FIRST TEST!!!
	if (oldmaid.gameOver === true){
		console.log("game over", props.gameOver)
		handleGameOver()
	}; // maybe pass this function down into the animation?

	return (
		<>
			<ScoringNav gameState={oldmaid} resetScore={handleResetScore} />
			<OldMaidBody>
				<div className="body">
					<Route path="/old-maid/startscreen">
						<StartScreen handleNewGame={handleNewGame} />
					</Route>
					<Route path="/old-maid/character-select">
						<CharSelect />
					</Route>

					<Route path="/old-maid/gamescreen">
						<div className="centered">
							<PairedCards lastPaired={lastPaired} paired={paired} />
						</div>

						<img className="tree tree1" src={tree1} alt="tree" />
						<img className="CowTilt" src={CowTilt} alt="cow" />
						<img className="tree tree2" src={tree2} alt="tree" />
						<img className="tree tree3" src={tree2} alt="tree" />

						<div className="cards">
							<div
								className="hand opponentHand"
								onClick={() => {
									oldmaid.playerTurn
										? console.log('not my turn')
										: takePlayerTurn(
											oldmaid.hands.opponentHand,
											oldmaid.hands.playerHand
										  );
								}}
							>
								<Character character={oldmaid.playerCharacter.computer} />
								<Player
									playerHand={oldmaid.hands.opponentHand}
									isUser={false}
									classNames="card opponentCard"
								/>
							</div>
							<div
								className="hand playerHand"
								onClick={() => {
									oldmaid.playerTurn
										? takePlayerTurn(oldmaid.hands.playerHand, oldmaid.hands.opponentHand)
										: console.log('not my turn');
								}}
							>
								<Player
									playerHand={oldmaid.hands.playerHand}
									isUser={true}
									classNames="card playerCard"
								/>
								<Character character={oldmaid.playerCharacter.user} />
							</div>
						</div>
					</Route>

					<Route path="/old-maid/gameoverscreen">
						<GameOverScreen playerWon={isUserWinning} handleNewGame={handleNewGame} />
					</Route>
				</div>
			</OldMaidBody>
		</>
	);
}

const mapStateToProps = state => {
	return {
		oldmaid: state.oldmaid,
		gameOver: state.oldmaid.gameOver
	};
};

export default connect(mapStateToProps)(OldMaidGame);

// { newGame, resetScore, increaseUserWinScore, increaseComputerWinScore, settleTurn }
