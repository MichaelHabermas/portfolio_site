import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

//components
import ScoringNav from "../navs/ScoringNav.js";
import StartScreen from "./StartScreen";
import GameOverScreen from "./GameOverScreen";
import Player from "../Player.js";
import Character from "../Character.js";
import CharSelect from "./CharSelect";

//assets
// game screen assets
import cardBack from "../../assets/cardGameAssets/card_face_selected.png";
import cardFront from "../../assets/cardGameAssets/card_face_norm.png";
import tree1 from "../../assets/oldMaidAssets/tree_a.png";
import tree2 from "../../assets/oldMaidAssets/tree_b.png";
import tree3 from "../../assets/oldMaidAssets/tree_w_cow.png";
import PairedCards from "./pairAnimation.js";

//actions
import {
	newGame,
	resetScore,
	increaseUserWinScore,
	increaseComputerWinScore,
	settleTurn,
} from "../../actions/oldmaidActions";

// styling
const OldMaidBody = styled.div`
	background-color: #a3c7ff;

	.body {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(to bottom, #97c53c, #ccdf69);
	}

	// game play background styling
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
		right: 2%;
		transform: translate(0%, -50%);
	}
	.tree3 {
		top: 80%;
		left: 20%;
		transform: translate(-50%, -50%);
	}

	// game play element styling
	.cards {
		height: 100%;
		padding: 5% 0 0 0;
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
		font-size: 5rem;
		text-align: center;
		margin: 1rem 0 0 0;
		font-family: "Bangers", cursive;
		color: #f89001;
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

	//	MEDIA QUERIES										                                         MEDIA Q's

	// this is attempt to fix the iphone landscape issues. NEEDS WORK
	@media all and (orientation: landscape) {
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

const OldMaidGame = props => {
	const { oldmaid, dispatch } = props;
	const { push } = useHistory();
	const [paired, setPaired] = useState([]);
	const [lastPaired, setLastPaired] = useState("");

	// handles each player taking their turn
	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];

		let newChooseeHand;
		let newChooserHand;

		setLastPaired(chosenCard);

		if (chosenCard[0] === "Q") {
			newChooseeHand = [...choosee.filter(item => item[0] !== "Q")];
			newChooserHand = [...chooser, "Q"];
		} else {
			setPaired([...paired, chosenCard]);
			newChooseeHand = [...choosee.filter(item => item[0] !== chosenCard[0])];
			newChooserHand = [...chooser.filter(item => item[0] !== chosenCard[0])];
		}

		const newState = {
			hands: {
				playerHand: oldmaid.playerTurn ? newChooserHand : newChooseeHand,
				opponentHand: oldmaid.playerTurn ? newChooseeHand : newChooserHand,
			},
			playerTurn: !oldmaid.playerTurn,
			gameOver:
				newChooserHand.length < 1 || newChooseeHand.length < 1 ? true : false,
		};

		dispatch(settleTurn(newState));
	};

	const handleNewGame = () => {
		dispatch(newGame());
		setPaired([]);
		// push('/old-maid/character-select');
		push("/old-maid/gamescreen");
	};

	const isUserWinning = () => {
		return oldmaid.hands.playerHand.length > oldmaid.hands.opponentHand;
	};

	const handleScoreReset = () => {
		dispatch(resetScore());
	};

	const handleGameOver = () => {
		handleScoreUpdate();
		setTimeout(() => {
			push("/old-maid/gameoverscreen");
		}, 1100);
	};

	const handleScoreUpdate = () => {
		if (oldmaid.hands.playerHand.length === 0) {
			const newScore = oldmaid.score.yourScore + 1;
			dispatch(increaseUserWinScore(newScore));
		} else {
			const newScore = oldmaid.score.theirScore + 1;
			dispatch(increaseComputerWinScore(newScore));
		}
	};

	if (oldmaid.gameOver === true) {
		handleGameOver();
	}

	return (
		<React.Fragment>
			<OldMaidBody>
				<ScoringNav gameState={oldmaid} resetScore={handleScoreReset} />
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
						<img className="tree tree2" src={tree3} alt="tree" />
						<img className="tree tree3" src={tree2} alt="tree" />

						<div className="cards">
							<div
								className="hand opponentHand"
								onClick={() => {
									oldmaid.playerTurn
										? console.log("not my turn")
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
										? takePlayerTurn(
												oldmaid.hands.playerHand,
												oldmaid.hands.opponentHand
										  )
										: console.log("not my turn");
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
						<GameOverScreen
							playerWon={isUserWinning}
							handleNewGame={handleNewGame}
						/>
					</Route>
				</div>
			</OldMaidBody>
		</React.Fragment>
	);
};

const mapStateToProps = state => {
	return {
		oldmaid: state.oldmaid,
		gameOver: state.oldmaid.gameOver,
	};
};

export default connect(mapStateToProps)(OldMaidGame);
