import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mpage = styled.div`
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
		color: white;
		list-style: none;
		text-decoration: none;
		/* border: 1px solid green; */
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

	@media (max-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		h2 {
			font-size: 1rem;
		}
	}
	@media only screen and (min-width: 427px) and (max-width: 641px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	
		
		nav {
			overflow-x: hidden;
			left: 10%;
		}
		
		.nav-links {
			position: absolute;
			right: 0px;
			height: 40vh;
			top: 15vh;
			background: transparent;
			display: none;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 20%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
			font-size: .8rem;
		}
		.nav-links li {
			opacity: 0;
		}
		.nav-links li a,
		.nav-links li button {
			color: white;
		}
		.burger {
			display: block;
			cursor: pointer;
			background: transparent;
		}
		h2 {
			font-size: 1rem;
		}
	}
	@media screen (min-width: 642px) and (max-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		.link-text {
			font-size: 0.6rem;
		}
		.nav-links {
			width: 100%;
		}
		h2 {
			font-size: 1.1rem;
		}
	}
	@media screen (min-width: 962px) and (max-width: 1100px) {
		.link-text {
			font-size: 0.7rem;
		}
		.nav-links {
			width: 100%;
		}
	}
	@media screen (min-width: 1101px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
		.link-text {
			font-size: 0.8rem;
		}
		.nav-links {
			width: 40%;
		}
		h2 {
			font-size: 2rem;
		}
	}
	@media screen (min-width: 1282px) and (max-width: 1550px) {
		/* big landscape tablets, laptops, and desktops */
		.link-text {
			font-size: 0.9rem;
		}
		.nav-links {
			width: 50%;
		}
		h2 {
			font-size: 2rem;
		}
	}
	@media (min-width: 1550px) {
		.link-text {
			font-size: 1.3rem;

			height: 100%;
		}
		.nav-links {
			width: 50%;
			height: 100%;
		}
		h2 {
			font-size: 3rem;
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

const MichaelNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Mpage>
			<nav>
				<Link to="/personal-info/michael/">
					<h2>Michael Habermas</h2>
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
							href="/personal-info/Michael/projects"
						>
							Projects
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
							href={`mailto:michaelghabermas@gmail.com`}
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
		</Mpage>
	);
};

export default MichaelNav;
