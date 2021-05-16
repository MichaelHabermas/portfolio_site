import { shuffledDeck1 } from '../Deck';

const shuffler = deckArray => {
	deckArray.forEach((card, index) => {
		let randPos = Math.floor(Math.random() * deckArray.length);
		[deckArray[index], deckArray[randPos]] = [deckArray[randPos], deckArray[index]];
	});
	return deckArray;
};

function splitDeckInHalf(deck) {
	const half = Math.ceil(deck.length / 2);
	const opponentsHalf = deck.slice(0, half);
	const playersHalf = deck.slice(half, deck.length);
	return { playersHalf, opponentsHalf };
}

function removeThePairs(newHandObject) {
	const newHand = [];
	for (let key in newHandObject) {
		if (newHandObject[key] % 2 !== 0) newHand.push(key);
	}
	return newHand;
}

function groupTheCards(hand) {
	const newHandObject = {};
	hand.forEach(card => {
		if (newHandObject[card[0]]) {
			newHandObject[card[0]] += 1;
		} else {
			newHandObject[card[0]] = 1;
		}
	});
	return newHandObject;
}

export const OldMaidDeckSetup = () => {
	// ##### deck setup for Old Maid #####
	// takes out 3 of the Queens from the deck
	const createOldMaidDeck = deck => deck.filter(card => card !== 'Qs' && card !== 'Qh' && card !== 'Qc');

	// filters an array of cards to remove pairs, but leave "odd man out" cards
	const removePairs = handOfCards => {
		const groupedCards = groupTheCards(handOfCards);
		return removeThePairs(groupedCards);
	};

	// splits the deck in half, removes pairs from each hand, and returns the 2 player's hands as objects
	const createHandsForOldMaid = deck => {
		const { playersHalf, opponentsHalf } = splitDeckInHalf(deck);

		// creates and returns the initial set of hands for the start of the game
		return {
			playerHand: removePairs(playersHalf),
			opponentHand: removePairs(opponentsHalf)
		};
	};

	const oldMaidDeck = shuffler(createOldMaidDeck(shuffledDeck1));
	return createHandsForOldMaid(oldMaidDeck);
};
