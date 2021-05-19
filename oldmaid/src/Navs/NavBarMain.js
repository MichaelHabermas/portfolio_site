import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
		background: #200122; /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #6f0000, #200122); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #6f0000, #200122);
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

	// burger styling
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

	// dropdown styling
	.dropbtn {
		background-color: transparent;
		font-family: 'Poppins', sans-serif;
		border: none;
		color: rgb(226, 226, 226);
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #ddd;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown:hover .dropbtn {
		background-color: #3e8e41;
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
			background: #200122; /* fallback for old browsers */
			background: -webkit-linear-gradient(to top, #6f0000, #200122); /* Chrome 10-25, Safari 5.1-6 */
			background: linear-gradient(
				to top,
				#6f0000,
				#200122
			); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
				<Link to="/">
					<div className="logo">
						<h4>T.R.I.</h4>
					</div>
				</Link>
				<ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${1 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<Link to="/">Home</Link>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${2 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<Link to="/">About</Link>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${3 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						{/* <Link to="/work">Work</Link> */}
						<div class="dropdown">
							<button class="dropbtn">Work</button>
							<div class="dropdown-content">
								<Link to="/work">Parallax Examples</Link>
								<a href="/">Link A</a>
							</div>
						</div>
					</li>
					<li
						style={
							isOpen
								? { animation: `navLinkFade 0.5s ease forwards ${4 / 7 + 0.15}s` }
								: { animation: '' }
						}
					>
						<div class="dropdown">
							<button class="dropbtn">Projects</button>
							<div class="dropdown-content">
								<Link to="/old-maid/startscreen">Old Maid</Link>
								<a href="/">Link 1</a>
							</div>
						</div>
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
