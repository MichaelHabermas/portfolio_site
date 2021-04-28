import React, { useState } from 'react';
import '../cssFiles/App.css';
import styled from 'styled-components';

const initialHands = { playerHand: ['1', '2', '3', '4', '5', '6', 'Q'], opponentHand: ['1', '2', '3', '4', '5', '6'] };
// const initialHands = { playerHand: ['1', '8', '3', '10', '5', '8'], opponentHand: ['1', '2', '3', '4', '5', '6', 'Q'] };

const MainApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;

	h1 {
		margin: ;
	}

	.cards {
		border: 1px solid rebeccapurple;
	}

	.hand {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid yellow;
	}

	.card {
		border: 1px solid black;
		padding: 1rem 0;
		width: 3rem;
		font-size: 2rem;
		text-align: center;
		margin: 0.5rem;
		border-radius: 10px;
	}

	.opponentHand {
		cursor: pointer;
	}
`;

function App() {
	const [hands, setHands] = useState(initialHands);
	const [playerTurn, setPlayerTurn] = useState(true);

	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];

		if (chosenCard === 'Q') {
			// switch Queen to other hands
			const newChooseeHand = [...choosee];
			newChooseeHand.splice(chosenCardIndex, 1);
			const newChooserHand = [...chooser];
			newChooserHand.push('Q');

			setHands({
				playerHand: playerTurn ? newChooserHand : newChooseeHand,
				opponentHand: playerTurn ? newChooseeHand : newChooserHand
			});

			return;
		} else {
			// remove same card from both hands
			chooser.forEach((card, idx) => {
				if (card === chosenCard) {
					console.log(card);
				}
			});
		}
	};

	return (
		<MainApp>
			<h1>OLD MAID</h1>
			<div className="cards">
				<div
					className="hand opponentHand"
					onClick={() => {
						setPlayerTurn(true);
						takePlayerTurn(hands.playerHand, hands.opponentHand);
					}}
				>
					Opponent Hand:
					{hands.opponentHand.map(card => {
						return (
							<div key={Math.random()} className="card">
								{card}
							</div>
						);
					})}
				</div>
				<div
					className="hand playerHand"
					onClick={() => {
						setPlayerTurn(false);
						takePlayerTurn(hands.opponentHand, hands.playerHand);
					}}
				>
					Player Hand:
					{hands.playerHand.map(card => {
						return (
							<div key={Math.random()} className="card">
								{card}
							</div>
						);
					})}
				</div>
			</div>
		</MainApp>
	);
}

export default App;
