import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	margin: 0 20%;

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
		color: rgb(226, 226, 226);
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
		color: rgb(226, 226, 226);
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	button {
		color: rgb(226, 226, 226);
		background-color: #bd8dda;
		border: 3px solid rgb(226, 226, 226);
		border-radius: 100%;
		font-weight: bold;
		padding: 0.5rem;
	}

	/* TABLET ZONE */
	/* @media screen and (max-width: 1024px) {
		.nav-links {
			width: 40%;
		}
	} */

	/* MOBILE DESIGN  */
	/* @media screen and (max-width: 768px) {
		body {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 92vh;
			top: 8vh;
			background-color: #5d5d5d;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 40%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.burger {
			display: block;
			cursor: pointer;
		} */
	/* } */
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
