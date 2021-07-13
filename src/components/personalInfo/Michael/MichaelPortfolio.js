import React from "react";
import styled from "styled-components";

// icon imports

// built for mobile first, media queries at the end
const MichaelPortfolioStyles = styled.div`
	html {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		border: 1px dotted rebeccapurple;
	}

	color: red;

	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	inset: 0rem;
	height: 100vh;

	h1,
	h2 {
		text-align: center;
	}

	.landing,
	.skills,
	.projects {
	}

	.landing {
	}

	.skills {
		background-color: white;
	}

	.projects {
	}

	.sub_section {
		width: 90%;
		margin: 0 auto;
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
				<div className="sub_section">
					<nav>Hi, I'm the nav!</nav>
					<h1>Hi, I'm Michael</h1>
					<p>
						A passionate Full Stack Web Developer having experience building Web
						applications with JavaScript / React / Nodejs, some other cool
						libraries and frameworks. I also dabble in design, love prototyping,
						and<em> adore</em> Figma.
					</p>
					<div className="arrow">arrow</div>
				</div>
			</section>

			<section className="skills">
				<div className="sub_section">
					<h2>Skills</h2>
					<div className="skill_icons">skill</div>
				</div>
			</section>

			<section className="projects">
				<div className="sub_section">
					<h2>Projects</h2>
					<div className="project_cards">
						<div className="card">card</div>
						<div className="card">card</div>
					</div>
				</div>
			</section>
		</MichaelPortfolioStyles>
	);
}

export default MichaelPortfolio;
