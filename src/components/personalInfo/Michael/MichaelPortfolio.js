import React from "react";
import styled from "styled-components";

// component import
import Nav from "../../personal_info_2/about_us_nav";

// icon imports
import { RiMailFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

// asset imports
import landingBackgroundMobile from "../../../assets/michaelPage/michael_landing_background_mobile.svg";
import projectsBackgroundMobile from "../../../assets/michaelPage/projects_background_mobile.png";

// import spaceImage from "../../../assets/michaelPage/michael_main_widescreen.svg";
// import spaceImageDesktop from "../../../assets/michaelPage/space_background_desktop.svg";
// import spaceImageTablet from "../../../assets/michaelPage/space_background_tablet.svg";
// import spaceImageTabletTest from "../../../assets/michaelPage/michael_main_tablet.png";
// import moonImage from "../../../assets/michaelPage/moon.svg";

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

	color: red; /* for testing purposes */
	background-color: black;

	h1,
	h2 {
		text-align: center;
	}

	h1 {
		font-size: 5rem;
	}

	h2 {
		font-size: 3rem;
	}

	.landing,
	.skills,
	.projects {
	}

	.landing {
		background-image: url(${landingBackgroundMobile});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;

		color: white;
	}

	.landing p {
		font-size: 2rem;
	}

	.skills {
		background-color: white;
	}

	.projects {
		background-image: url(${projectsBackgroundMobile});
		background-position: center center;
		/* background-attachment: fixed; */
		/* background-repeat: no-repeat; */
		/* background-size: cover;  */
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
					<Nav name="Michael Habermas" cvLink="" />
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
					<div className="skill_icons">
						<FaLinkedin className="icon" />
						<FaGithub className="icon" />
						<FaTwitterSquare className="icon" />
						<RiMailFill className="icon" />
					</div>
				</div>
			</section>

			<section className="projects">
				<div className="sub_section">
					<h2>Projects</h2>
					<div className="project_cards">
						<div className="card">card</div>
						<div className="card">card</div>
					</div>
					<footer>
						<FaLinkedin className="icon" />
						<FaGithub className="icon" />
						<button>Download My CV</button>
						<FaTwitterSquare className="icon" />
						<RiMailFill className="icon" />
					</footer>
				</div>
			</section>
		</MichaelPortfolioStyles>
	);
}

export default MichaelPortfolio;
