import React, { useState } from 'react';
import '../cssFiles/App.css';
import styled from 'styled-components';

const initialHands = {
	playerHand: ['1A', '2A', '3A', '4A', '5A', '6A', 'Q'],
	opponentHand: ['1B', '2B', '3B', '4B', '5B', '6B']
};
// const initialHands = {
// 	playerHand: ['1', '2', '3', '4', '5', '6', 'Q'],
// 	opponentHand: ['1', '2', '3', '4', '5', '6']
// };

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
	let playerTurn = true;

	const takePlayerTurn = (chooser, choosee) => {
		const chosenCardIndex = Math.floor(Math.random() * choosee.length);
		const chosenCard = choosee[chosenCardIndex];
		console.log(chosenCard);
		console.log(chosenCardIndex);

		let newChooseeHand;
		let newChooserHand;

		if (chosenCard === 'Q') {
			console.log('situationA');
			newChooseeHand = [...choosee.filter(item => item !== 'Q')];
			newChooserHand = [...chooser, 'Q'];
		} else {
			newChooseeHand = [...choosee.filter(item => item[0] !== chosenCard[0])];
			newChooserHand = [...chooser.filter(item => item[0] !== chosenCard[0])];
		}

		setHands({
			playerHand: playerTurn ? newChooserHand : newChooseeHand,
			opponentHand: playerTurn ? newChooseeHand : newChooserHand
		});
	};

	return (
		<MainApp>
			<h1>OLD MAID</h1>
			<div className="cards">
				<div
					className="hand opponentHand"
					onClick={() => {
						playerTurn = true;
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
						playerTurn = false;
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
