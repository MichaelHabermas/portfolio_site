import { NEW_GAME, RESET_SCORE, INCREASE_USER_WIN_SCORE, INCREASE_COMPUTER_WIN_SCORE, SETTLE_TURN } from '../actions/oldmaidActions';

import { OldMaidDeckSetup } from '../components/OldMaid/OldMaidDeckSetup';
import charactersArray from '../assets/characters/Characters';

const initialState = {
	gameName: 'Old Maid',
	score: { yourScore: 0, theirScore: 0 },
	hands: OldMaidDeckSetup(),
	gameOver: false,
	playerCharacter: {
		user: {
			image: charactersArray[Math.floor(Math.random() * charactersArray.length)],
			color: '#111111'
		},
		computer: {
			image: charactersArray[Math.floor(Math.random() * charactersArray.length)],
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
				playerTurn: true
			}
		case RESET_SCORE:
			return {
				...state,
				score: {
					yourScore: 0,
					theirScore: 0
				}
			}
		case INCREASE_USER_WIN_SCORE:
			return {
				...state,
				score: {
					yourScore: state.score.yourScore + 1,
					theirScore: state.score.theirScore
				},
				gameOver: false
			}	
		case INCREASE_COMPUTER_WIN_SCORE:
			return {
				...state,
				score: {
					yourScore: state.score.yourScore,
					theirScore: state.score.theirScore + 1
				},
				gameOver: false
			}
		case SETTLE_TURN:
			return {
				...state,
				hands: {
					playerHand: state.playerTurn ? action.payload.newChooserHand : action.payload.newChooseeHand,
					opponentHand: state.playerTurn ? action.payload.newChooseeHand : action.payload.newChooserHand
				},
				playerTurn: !state.playerTurn,
				gameOver: action.payload.newChooserHand.length < 1 || action.payload.newChooseeHand.length < 1 ? true : false
			}
		default:
			return state;
	}
};

export default reducer;