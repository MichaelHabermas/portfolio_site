import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wpage = styled.div`
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
		color: white;
		list-style: none;
		text-decoration: none;
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
		font-size: 1.5rem;
	}

	nav h2 {
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 1;
		font-size: 3rem;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		width: 30%;
		font-size: 1.5rem;
		font-weight: bold;
	}

	@media (max-width: 425px) {
	}
	@media (max-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media (max-width: 641px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media (max-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media (min-width: 1281px) {
	}
`;

const WillNav = () => {
	return (
		<Wpage>
			<nav>
				<Link to="/personal-info/Will/">
					<h2>Will Moon</h2>
				</Link>
				<ul>
					<li>
						<Link to="/personal-info/Will/projects">Projects</Link>
					</li>
					<li>
						<a href={`mailto:theWillsghabermas@gmail.com`}>
							Contact
						</a>
					</li>
					<li>
						<Link to="/">Back to Main</Link>
					</li>
				</ul>
			</nav>
		</Wpage>
	);
};

export default WillNav;
