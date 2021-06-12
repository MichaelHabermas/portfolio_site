import {
	NEW_GAME,
	RESET_SCORE,
	INCREASE_USER_WIN_SCORE,
	INCREASE_COMPUTER_WIN_SCORE,
	SETTLE_TURN
} from '../actions/oldmaidActions';

import { OldMaidDeckSetup } from '../components/OldMaid/OldMaidDeckSetup';
import charactersArray from '../assets/characters/Characters';

const initialState = {
	gameName: 'Old Maid',
	score: { yourScore: 0, theirScore: 0 },
	hands: OldMaidDeckSetup(),
	gameOver: false,
	playerCharacter: {
		user: {
			image: charactersArray[
				Math.floor(Math.random() * charactersArray.length)
			],
			color: '#111111'
		},
		computer: {
			image: charactersArray[
				Math.floor(Math.random() * charactersArray.length)
			],
			color: '#999999'
		}
	},
	playerTurn: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_GAME:
			return {
				...state,
				hands: OldMaidDeckSetup(),
				playerTurn: true,
				gameOver: false
			};
		case RESET_SCORE:
			return {
				...state,
				score: {
					yourScore: 0,
					theirScore: 0
				}
			};
		case INCREASE_USER_WIN_SCORE:
			return {
				...state,
				score: {
					yourScore: action.payload,
					theirScore: state.score.theirScore
				},
				gameOver: false
			};
		case INCREASE_COMPUTER_WIN_SCORE:
			return {
				...state,
				score: {
					yourScore: state.score.yourScore,
					theirScore: action.payload
				},
				gameOver: false
			};
		case SETTLE_TURN:
			return {
				...state,
				hands: {
					playerHand: action.payload.hands.playerHand,
					opponentHand: action.payload.hands.opponentHand
				},
				playerTurn: action.payload.playerTurn,
				gameOver: action.payload.gameOver
			};
		default:
			return state;
	}
};

export default reducer;
