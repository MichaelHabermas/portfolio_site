import React, { useContext } from 'react';
import OldMaidContext from '../contexts/OldMaidContext';

const Player = () => {
	const { hands, playerTurn, playerCharacter } = useContext(OldMaidContext);

	return (
		<div
			className="hand playerHand"
			onClick={() => {
				playerTurn
					? takePlayerTurn(oldMaidState.hands.playerHand, oldMaidState.hands.opponentHand)
					: console.log('not my turn');
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

			<img height="80px" src={oldMaidState.playerCharacter.user} alt="Eyes Without a FA-AACE" />
		</div>
	);
};

export default Player;
