import React from 'react';

const Card = props => {
	const { card, isUser, classNames } = props;

	return <div className={classNames}>{isUser ? card : ''}</div>;
};

export default Card;
