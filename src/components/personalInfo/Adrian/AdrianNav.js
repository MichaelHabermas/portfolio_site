import React from 'react';
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
		font-size: 2rem;
	}

	nav h2 {
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 1;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		width: 40%;
		font-size: 1.5rem;
		font-weight: bold;
	}
	@media (max-width: 425px) {
		.logo {
			width: 2rem;
		}
	}
	@media (max-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		.logo {
			width: 3rem;
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
		.logo {
			width: 5rem;
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
		.logo {
			width: 8rem;
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
		.logo {
			width: 9rem;
		}
	}
	@media (min-width: 1281px) {
		.link-text {
			font-size: 1.1rem;
		}
		.nav-links {
			width: 50%;
		}
		.logo {
			width: 10rem;
		}
	}
`;

const AdrianNav = () => {
	return (
		<Apage>
			<nav>
				<Link to="/personal-info/adrian/">
					<h2>VanderLust</h2>
				</Link>
				<ul>
					<li>
						<Link to="/personal-info/adrian/characterdesign">
							Character Design
						</Link>
					</li>
					<li>
						<a href={`mailto:adrianghabermas@gmail.com`}>Contact</a>
					</li>
					<li>
						<Link to="/">Back to Main</Link>
					</li>
				</ul>
			</nav>
		</Apage>
	);
};

export default AdrianNav;
