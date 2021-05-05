const spades = ['2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As'];
const hearts = ['2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah'];
const diamonds = ['2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad'];
const clubs = ['2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac'];

// 2 different card decks. Jokers not included
const deckWSuits = [...spades, ...hearts, ...diamonds, ...clubs];
// const deckWOSuits = [
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'T',
// 	'J',
// 	'Q',
// 	'K',
// 	'A',
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'T',
// 	'J',
// 	'Q',
// 	'K',
// 	'A',
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'T',
// 	'J',
// 	'Q',
// 	'K',
// 	'A',
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'T',
// 	'J',
// 	'Q',
// 	'K',
// 	'A'
// ];

const shuffler = deckArray => {
	deckArray.forEach((card, index) => {
		let randPos = Math.floor(Math.random() * deckArray.length);
		[deckArray[index], deckArray[randPos]] = [deckArray[randPos], deckArray[index]];
	});
	return deckArray;
};



// ------- Choose which kind of shuffled deck to export
export const shuffledDeck1 = shuffler(shuffler(shuffler(deckWSuits)));
// export const shuffledDeck1 = shuffler(shuffler(shuffler(deckWOSuits)));
//tasks and think about ui ideas