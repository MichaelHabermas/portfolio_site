import React from 'react';
import Card from './Card';

const Player = props => {
	const { playerHand, isUser, classNames } = props;
	return (
		<React.Fragment>
			<div>
				{playerHand.map(card => {
					return (
						<Card
							key={Math.random()}
							classNames={classNames}
							isUser={isUser}
							card={card}
						/>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Player;
