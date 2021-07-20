import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/homePage/Logo.png';

const Nav = styled.div`
	position: absolute;
	top: 3%;
	width: 100%;
	z-index: 20;

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		z-index: 10;
		color: white;
		list-style: none;
		text-decoration: none;
		/* border: 1px solid blue; */
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		min-height: 10vh;
		background: transparent;
		width: 80%;
		margin: auto;
	}

	.logo {
		width: 10rem;
		margin-top: 5%;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		width: 40%;
	}

	.nav-links a {
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
	}
	.link-text {
		font-size: 1.5rem;
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
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 1.5rem;
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

	// MEDIA QUERIES
	@media screen and (max-width: 425px) {
		/* body {
			overflow-x: hidden;
		} */
		nav {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 60vh;
			top: 6vh;
			background: transparent;
			display: none;
			flex-direction: column;
			align-items: center;
			width: 30%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.nav-links li a,
		.nav-links li button {
			color: #db8ca1;
		}
		.burger {
			display: block;
			cursor: pointer;
		}
		.logo {
			font-size: 5rem;
		}
		.link-text {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		nav {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 60vh;
			top: 6vh;
			background: transparent;
			display: none;
			flex-direction: column;
			align-items: center;
			width: 30%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.nav-links li a,
		.nav-links li button {
			color: #db8ca1;
		}
		.burger {
			display: block;
			cursor: pointer;
		}
		.logo {
			width: 7rem;
		}
		.link-text {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */

		.logo {
			width: 8.5rem;
		}
		.nav-links {
			width: 60%;
		}

		.link-text {
			font-size: 0.9rem;
		}
	}
	@media screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */

		.nav-links {
			width: 50%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1100px) and (max-width: 1281px) {
		.nav-links {
			width: 40%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1281px) and (max-width: 1500px) {
		/* big landscape tablets, laptops, and desktops */

		.nav-links {
			width: 40%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1500px) {
		.nav-links {
			width: 40%;
		}
		.link-text {
			font-size: 1.3rem;
		}
	}
	/* ANIMATIONS  */
	.nav-active {
		transform: translateX(0%);
		display: flex;
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
					<div>
						<img className="logo" src={Logo} alt={Logo} />
					</div>
				</Link>
				<ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
					<li
						style={
							isOpen
								? {
										animation: `navLinkFade 0.5s ease forwards ${
											1 / 7 + 0.15
										}s`
								  }
								: { animation: '' }
						}
					>
						<Link to="/" className="link-text">
							Home
						</Link>
					</li>
					<li
						style={
							isOpen
								? {
										animation: `navLinkFade 0.5s ease forwards ${
											2 / 7 + 0.15
										}s`
								  }
								: { animation: '' }
						}
					>
						<div className="dropdown">
							<Link to="/about-us">
								<button className="dropbtn link-text">
									About
								</button>
							</Link>
							<div className="dropdown-content">
								<Link to="/personal-info/will">Will Moon</Link>
								<Link to="/personal-info/adrian">
									Adrian Van Der Valk
								</Link>
								<Link to="/personal-info/michael">
									Michael Habermas
								</Link>
							</div>
						</div>
					</li>
					<li
						style={
							isOpen
								? {
										animation: `navLinkFade 0.5s ease forwards ${
											3 / 7 + 0.15
										}s`
								  }
								: { animation: '' }
						}
					>
						<div className="dropdown">
							<button className="dropbtn link-text">Work</button>
							<div className="dropdown-content">
								<Link to="/work">Parallax Examples</Link>
								<a href="/">Link A</a>
							</div>
						</div>
					</li>
					<li
						style={
							isOpen
								? {
										animation: `navLinkFade 0.5s ease forwards ${
											4 / 7 + 0.15
										}s`
								  }
								: { animation: '' }
						}
					>
						<div className="dropdown">
							<button className="dropbtn link-text">
								Projects
							</button>
							<div className="dropdown-content">
								<Link to="/old-maid/startscreen">Old Maid</Link>
								<a href="/">Link 1</a>
							</div>
						</div>
					</li>
				</ul>
				<div
					className={isOpen ? 'burger toggle' : 'burger'}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</div>
			</nav>
		</Nav>
	);
};

export default NavBarMain;
