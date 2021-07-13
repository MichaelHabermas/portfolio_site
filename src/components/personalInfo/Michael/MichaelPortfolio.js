import React from "react";
import styled from "styled-components";

// built for mobile first, media queries at the end
const MichaelPortfolioStyles = styled.div`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		border: 1px dotted rebeccapurple;
	}

	color: red;
	width: 90%;
	margin: 0 auto;

	h1,
	h2 {
		text-align: center;
	}

	@media screen and (min-width: 480px) {
		color: blue;
	}
	@media screen and (min-width: 768px) {
		color: red;
	}
	@media screen and (min-width: 1024px) {
		color: blue;
	}
	@media screen and (min-width: 1200px) {
		color: red;
	}
	@media screen and (min-width: 1550px) {
		color: blue;
	}
`;

function MichaelPortfolio() {
	return (
		<MichaelPortfolioStyles>
			<section className="landing">
				<nav></nav>
				<h1>Hi, I'm Michael</h1>
				<p>
					A passionate Full Stack Web Developer having experience building Web
					applications with JavaScript / React / Nodejs, some other cool
					libraries and frameworks. I also dabble in design, love prototyping,
					and<em> adore</em> Figma.
				</p>
			</section>
			<section className="skills">
				<h2>Skills</h2>
			</section>
			<section className="projects">
				<h2>Projects</h2>
			</section>
		</MichaelPortfolioStyles>
	);
}

export default MichaelPortfolio;
