import React, { useState } from 'react';
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
		background-color: #5d4954;
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

	.nav-links a {
		color: rgb(226, 226, 226);
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	.burger {
		display: none;
	}

	.burger div {
		width: 25px;
		height: 3px;
		background-color: rgb(226, 226, 226);
		margin: 5px;
		transition: all 0.3s ease;
	}

	/* TABLET ZONE */
	@media screen and (max-width: 1024px) {
		.nav-links {
			width: 40%;
		}
	}

	/* MOBILE DESIGN  */
	@media screen and (max-width: 768px) {
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
		}
	}

	/* ANIMATIONS  */
	.nav-active {
		transform: translateX(0%);
	}

	@keyframes navLinkFade {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}

	.toggle .line1 {
		transform: rotate(-45deg) translate(-5px, 6px);
	}
	.toggle .line2 {
		opacity: 0;
	}
	.toggle .line3 {
		transform: rotate(45deg) translate(-5px, -6px);
	}
`;

const NavBarMain = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Nav>
			<nav>
				<div className="logo">
					<h4>T.R.I.</h4>
				</div>
				<ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${1 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<a href="#">Home</a>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${2 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<a href="#">About</a>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${3 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<a href="#">Work</a>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${4 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<a href="#">Projects</a>
					</li>
				</ul>
				<div className={isOpen ? 'burger toggle' : 'burger'} onClick={() => setIsOpen(!isOpen)}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>
		</Nav>
	);
};

export default NavBarMain;
