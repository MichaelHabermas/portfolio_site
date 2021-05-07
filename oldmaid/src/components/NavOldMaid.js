import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
	*,  /* '*'selects all things, the :: before and :: after grab *something else* */
*::before,  /* these 3 are a safety to eliminate some presets */
*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		min-height: 8vh;
		background-color: #875f75;
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
	}

	.nav-links li {
		list-style: none;
	}

	.nav-links h4 {
		color: rgb(226, 226, 226);
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
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
	}


`;

const NavOldMaid = props => {
	const { yourScore, theirScore } = props.score;

	return (
		<Nav>
			<nav>
				<div className="logo">
					<h4>Old Maid</h4>
				</div>
				<ul className="nav-links">
					<li>
						<h4>You: {yourScore}</h4>
					</li>
					<li>
						<h4>Them: {theirScore}</h4>
					</li>
					<li>
						<h4>Rules</h4>
					</li>
				</ul>
			</nav>
		</Nav>
	);
};

export default NavOldMaid;
