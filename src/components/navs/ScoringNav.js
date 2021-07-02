import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
	position: absolute;
	top: 10%;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 70%;
	color: white;
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	nav {
		z-index: 1;
		border-radius: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		min-height: 8vh;
		background: #f3b38d; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to bottom right,
			#f3b38d,
			#f3d48c
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to bottom right, #f3b38d, #f3d48c);
	}

	.logo {
		/* color: rgb(226, 226, 226); */
		color: #ffffff;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 20px;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		width: 30%;
		align-items: center;
	}

	.nav-links li {
		list-style: none;
		line-height: 100%;
	}

	.nav-links h4 {
		/* color: rgb(226, 226, 226); */
		color: #ffffff;
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	button {
		background-color: #bd8dda;
		border: 3px solid rgb(226, 226, 226);
		border-radius: 100%;
		font-weight: bold;
		padding: 0.5rem;
		color: #bd8dda;
		color: #ffffff;
	}

	// MEDIA QUERIES
	@media (max-width: 425px) {
	}
	@media (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media (min-width: 1281px) and (max-width: 1500px) {
	}
	@media (min-width: 1500px) {
	}
`;

const ScoringNav = props => {
	const { gameState, resetScore } = props;

	return (
		<Nav>
			<nav>
				<div className="logo">
					<h4>{gameState.gameName}</h4>
				</div>
				<ul className="nav-links">
					<li>
						<h4>You: {gameState.score.yourScore}</h4>
					</li>
					<li>
						<h4>Them: {gameState.score.theirScore}</h4>
					</li>
					<li>
						<h4>Rules</h4>
					</li>
					<li>
						<button onClick={resetScore}>
							Reset
							<br />
							Score
						</button>
					</li>
				</ul>
			</nav>
		</Nav>
	);
};

export default ScoringNav;
