import React from "react";
import styled from "styled-components";

const NavBar = styled.div``;

const Nav = props => {
	const { name, cvLink } = props;

	return (
		<NavBar>
			<nav>
				<div className="nameLogo">{name}</div>
				<ul>
					<li>
						<a href={cvLink} target="_blank" rel="noreferrer">
							CV
						</a>
					</li>
					<li>
						<a href="/" target="_blank" rel="noreferrer">
							Home
						</a>
					</li>
				</ul>
			</nav>
		</NavBar>
	);
};

export default Nav;
