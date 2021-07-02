import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Apage = styled.div`
	position: absolute;
	top: 3%;
	width: 100%;
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		z-index: 1;
		color: #333333;
		list-style: none;
		text-decoration: none;
		border: 1px solid green;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		background: transparent;
		width: 80%;
		margin: auto;
	}

	nav h2 {
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 1.5rem;
	}

	.nav-links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
	}

	.link-text {
		text-decoration: none;
		font-weight: bold;
		height: 100%;
	}

	// burger styling
	.burger {
		display: none;
	}

	.burger div {
		width: 25px;
		height: 3px;
		background-color: #333333;
		margin: 5px;
		transition: all 0.3s ease;
	}

	// MEDIA QUERIES
	@media (max-width: 425px) {
		body {
			overflow-x: hidden;
		}
		h2 {
			font-size: 1rem;
		}
		.nav-links {
			position: absolute;
			right: 0px;
			height: 40vh;
			top: 15vh;
			background: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 30%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.nav-links li a,
		.nav-links li button {
			color: #333333;
		}
		.burger {
			display: block;
			cursor: pointer;
		}
	}
	@media (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		body {
			overflow-x: hidden;
		}
		h2 {
			font-size: 1rem;
		}
		.nav-links {
			position: absolute;
			right: 0px;
			height: 40vh;
			top: 15vh;
			background: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 30%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
		}
		.nav-links li a,
		.nav-links li button {
			color: #333333;
		}
		.burger {
			display: block;
			cursor: pointer;
		}
	}
	@media (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
		h2 {
			font-size: 2rem;
		}
		.nav-links {
			width: 60%;
		}

		.link-text {
			font-size: 0.9rem;
		}
	}
	@media (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		h2 {
			font-size: 2rem;
		}
		.nav-links {
			width: 50%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media (min-width: 1100px) and (max-width: 1281px) {
		h2 {
			font-size: 2.4rem;
		}
		.nav-links {
			width: 40%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media (min-width: 1281px) and (max-width: 1500px) {
		/* big landscape tablets, laptops, and desktops */
		h2 {
			font-size: 2.7rem;
		}
		.nav-links {
			width: 40%;
		}

		.link-text {
			font-size: 1rem;
		}
	}
	@media (min-width: 1500px) {
		h2 {
			font-size: 3rem;
		}
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

const AdrianNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Apage>
			<nav>
				<Link to="/personal-info/adrian/">
					<h2>VanderLust</h2>
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
						<a
							className="link-text"
							href="/personal-info/adrian/characterdesign"
						>
							Character Design
						</a>
					</li>
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
						<a
							className="link-text"
							href={`mailto:adrianghabermas@gmail.com`}
						>
							Contact
						</a>
					</li>
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
						<a className="link-text" href="/">
							Back to Main
						</a>
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
		</Apage>
	);
};

export default AdrianNav;
