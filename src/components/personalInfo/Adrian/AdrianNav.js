import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Apage = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0%;
		box-sizing: border-box;
		z-index: 1;
		color: #333333;
		list-style: none;
		text-decoration: none;
		/* border: 1px solid green; */
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'Poppins', sans-serif;
		position: absolute;
		top: 5%;
		left: 10%;
		width: 80%;
		font-size: 3rem;
	}

	nav h2 {
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 1.5rem;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		width: 40%;
		font-size: 1.5rem;
		font-weight: bold;
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

	// MEDIA QUERIES
	@media (max-width: 425px) {
		h2 {
			font-size: 1rem;
		}
	}
	@media (max-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		h2 {
			font-size: 1rem;
		}
	}
	@media (max-width: 641px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
		body {
			overflow-x: hidden;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 60vh;
			top: 6vh;
			background: transparent;
			display: flex;
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
		h2 {
			font-size: 1rem;
		}
	}
	@media (max-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		.link-text {
			font-size: 0.8rem;
		}
		.nav-links {
			width: 70%;
		}
		h2 {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 1281px) {
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
	@media (min-width: 1281px) {
		.link-text {
			font-size: 1.1rem;
		}
		.nav-links {
			width: 50%;
		}
		h2 {
			font-size: 3rem;
		}
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
					<li className="link-text">
						<Link to="/personal-info/adrian/characterdesign">
							Character Design
						</Link>
					</li>
					<li className="link-text">
						<a href={`mailto:adrianghabermas@gmail.com`}>Contact</a>
					</li>
					<li className="link-text">
						<Link to="/">Back to Main</Link>
					</li>
				</ul>
				<div
					className={isOpen ? 'burger toggle' : 'burger'}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>
		</Apage>
	);
};

export default AdrianNav;
