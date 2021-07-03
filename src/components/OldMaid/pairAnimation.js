import React from 'react';
import styled from 'styled-components';

import cardFront from '../../assets/cardGameAssets/card_face_norm.png';

const random = () => {
	return (-1 + Math.random() * 2).toFixed(2);
};

const Pile = styled.div`
	.sidePair {
		position: absolute;
		left: 5%;
		display: flex;
		transform: translateY(-50%);
	}

	.card {
		padding: 1rem 0;
		width: 60px;
		height: 80px;
		font-size: 2rem;
		text-align: center;
		color: white;
		text-shadow: 1px 1px 0 black;
		background-image: url(${cardFront});
		background-repeat: no-repeat;
		background-size: auto 100%;
		background: cover / center;
		transform: rotate(-10deg);
	}

	.rightCard {
		position: relative;
		right: 20%;
		transform: rotate(10deg);
	}

	.newPair {
		position: absolute;
		display: flex;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: Discarding 1s forwards
			cubic-bezier(${Math.random()}, ${random}, ${Math.random()}, 2);
	}

	// these are for the fading background colors
	@keyframes Discarding {
		0% {
			left: 50%;
			transform: translateY(50%) rotate(0deg);
		}
		33% {
			transform: translateY(-50%) rotate(1000deg);
		}
		66% {
			transform: translateY(50%) rotate(2000deg);
		}
		100% {
			left: 5%;
			top: 50%;
			transform: translateY(-50%)
				rotate(${3000 + Math.floor(Math.random() * 360)}deg);
		}
	}
	// MEDIA QUERIES
	@media only screen and (max-width: 425px) {
	}
	@media only screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media only screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media only screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
	}
	@media only screen and (min-width: 1500px) {
	}
`;

const PairedCards = props => {
	const { paired, lastPaired } = props;

	return (
		<Pile>
			{paired.map((pair, i) => {
				if (i !== paired.length - 1) {
					//put pairs on side
					return (
						<div key={Math.random()} className="sidePair">
							<div
								className="card"
								style={{
									transform: `rotate(${Math.floor(
										Math.random() * 360
									)}deg)`
								}}
							>
								{pair}
							</div>
							<div
								className="card rightCard"
								style={{
									transform: `rotate(${Math.floor(
										Math.random() * 360
									)}deg)`
								}}
							>
								{pair}
							</div>
						</div>
					);
				}
				if (lastPaired !== 'Q') {
					return (
						<div key={Math.random()} className="newPair">
							<div className="card">{pair}</div>
							<div className="card rightCard">{pair}</div>
						</div>
					);
				} else {
					return <div key={Math.random()}></div>;
				}
			})}
		</Pile>
	);
};

export default PairedCards;
