export const NEW_GAME = 'NEW_GAME';
export const RESET_SCORE = 'RESET_SCORE';
export const INCREASE_USER_WIN_SCORE = 'INCREASE_USER_WIN_SCORE';
export const INCREASE_COMPUTER_WIN_SCORE = 'INCREASE_COMPUTER_WIN_SCORE';
export const SETTLE_TURN = 'SETTLE_TURN';

export const newGame = () => {
	return { type: NEW_GAME };
};

export const resetScore = () => {
	return { type: RESET_SCORE };
};

export const increaseUserWinScore = newScore => {
	return { type: INCREASE_USER_WIN_SCORE, payload: newScore };
};

export const increaseComputerWinScore = newScore => {
	return { type: INCREASE_COMPUTER_WIN_SCORE, payload: newScore };
};

export const settleTurn = newHands => {
	return { type: SETTLE_TURN, payload: newHands };
};
