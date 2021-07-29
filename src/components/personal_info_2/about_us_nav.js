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
		color: #f0f2f1;
	}

	li {
		margin-left: 3rem;
	}

	a {
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		text-shadow: 1px 1px 1px rgba(236, 179, 254, 1),
			0 0 0.5em rgba(247, 254, 179, 1), 0 0 0.1em rgba(137, 254, 255, 1);
	}

	.navCV {
		letter-spacing: 0.3rem;
	}

	.nameLogo {
		font-family: "Lobster", cursive, sans-serif;
		font-size: 3rem;
		line-height: 3rem;
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
		nav {
			width: 80%;
		}

		li {
			margin-right: 2rem;
			padding-right: 10%;
		}

		li a {
			font-size: 2.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		nav {
			padding-top: 4%;
		}

		.nameLogo {
			font-size: 4.5rem;
		}

		li {
			margin-right: 3rem;
			padding-right: 13%;
		}

		li a {
			font-size: 2.7rem;
		}
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
						<a
							href={cvLink}
							target="_blank"
							rel="noreferrer"
							style={{ color: `${color}` }}
							className="navCV"
						>
							CV
						</a>
					</li>
					<li>
						<a href="/" style={{ color: `${color}` }}>
							Home
						</a>
					</li>
				</ul>
			</nav>
		</NavBar>
	);
};

export default Nav;
