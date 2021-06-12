import React from 'react';

const GameScreen = () => {
	return (
		<>
			<div className="centered">
				<PairedCards paired={paired} />
			</div>
			<div className="cards">
				<div
					className="hand opponentHand"
					onClick={() => {
						oldMaidState.playerTurn
							? console.log('not my turn')
							: takePlayerTurn(oldMaidState.hands.opponentHand, oldMaidState.hands.playerHand);
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
					<Player playerHand={oldMaidState.hands.playerHand} isUser={true} classNames="card playerCard" />
					<Character character={oldMaidState.playerCharacter.user} />
				</div>
			</div>
		</>
	);
};

export default GameScreen;
