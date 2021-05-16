import React from 'react';

const Player = props => {
	const { playerHand } = props;
	return (
		<>
			<div>
				{playerHand.map(card => {
					return (
						<div key={Math.random()} className="card playerCard">
							{card}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Player;
