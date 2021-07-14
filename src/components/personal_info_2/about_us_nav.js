import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-size: 2rem;
		font-weight: bold;
	}

	nav,
	ul {
		display: flex;
	}

	nav {
		width: 90%;
		height: 7rem;
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
	}

	li {
		margin-left: 3rem;
	}

	.nameLogo {
		font-family: "Lobster", cursive, sans-serif;
		font-size: 3rem;
		line-height: 3rem;
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

const Nav = props => {
	const { name, cvLink, color } = props;

	return (
		<NavBar style={{ color: `${color}` }}>
			<nav>
				<div className="nameLogo">{name}</div>
				<ul>
					<li>
						{/* <Link to={cvLink} target="_blank" download>
							CV
						</Link> */}
						<a
							href={cvLink}
							target="_blank"
							rel="noreferrer"
							style={{ color: `${color}` }}
						>
							CV
						</a>
					</li>
					<li>
						<a
							href="/"
							target="_blank"
							rel="noreferrer"
							style={{ color: `${color}` }}
						>
							Home
						</a>
					</li>
				</ul>
			</nav>
		</NavBar>
	);
};

export default Nav;
