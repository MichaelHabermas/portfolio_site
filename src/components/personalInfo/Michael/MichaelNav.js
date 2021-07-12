import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Mpage = styled.div`
	position: absolute;
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
		width: 85%;
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

	@media only screen and (max-width: 425px) {
		h2 {
			font-size: 1.5rem;
		}
		.nav-links {
			position: absolute;
			right: 0px;
			height: 100vh;
			top: 0vh;
			background: linear-gradient(100deg, #33ccff 0%, #ff99cc 100%);
			border-top-left-radius: 40px;
			border-bottom-left-radius: 40px;
			display: none;
			flex-direction: column-reverse;
			align-items: center;
			justify-content: space-evenly;
			// padding-top: 10%;
			padding-bottom: 25%;
			width: 25%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
		}
		.nav-links li {
			opacity: 0;
			text-align: center;
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

	@media (min-width: 425px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */

		nav {
			overflow-x: hidden;
			left: 10%;
		}

		h2 {
			font-size: 1.5rem;
		}
		.nav-links {
			position: absolute;
			right: 0px;
			height: 100vh;
			top: 0vh;
			background: transparent;
			display: none;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			padding-top: 10%;
			padding-bottom: 50%;
			width: 30%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in;
			font-size: 0.8rem;
		}
		.nav-links li {
			opacity: 0;
			text-align: center;
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
	}

	@media only screen and (min-width: 641px) and (max-width: 961px) {
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

	@media only screen and (min-width: 961px) and (max-width: 1100px) {
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
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
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

	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
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
	@media only screen and (min-width: 1500px) {
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
				<ul className={isOpen ? 'nav-links nav-active' : 'nav-links'} 
				// style={
				// 			isOpen
				// 				? {
				// 						animation: `navLinkFade 0.5s ease forwards ${
				// 							1 / 7 + 0.15
				// 						}s`,
				// 						transform: "translateX(0%)"
				// 				  }
				// 				: { animation: '' }
				// 		}
						>
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
							Home
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
