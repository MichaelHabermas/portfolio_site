import React, { useRef } from "react";
import styled from "styled-components";

// component import
import Nav from "../../personal_info_2/about_us_nav";

// icon imports
import { RiMailFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

// asset imports
import landingBackgroundMobile from "../../../assets/michaelPage/michael_landing_background_mobile.svg";
import projectsBackgroundMobile from "../../../assets/michaelPage/projects_background_mobile.png";
import arrows from "../../../assets/michaelPage/arrows.svg";

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

	/* for testing purposes */
	color: red;
	background-color: black;

	h1,
	h2 {
		text-align: center;
	}

	h1 {
		font-size: 6rem;
		width: 90%;
		margin: 0 auto 3rem;
	}

	h2 {
		font-size: 5rem;
		background-color: #f3ec78;
		/* padding-right: 10px; */
		background-image: linear-gradient(120deg, #000000, #ff0000);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-family: "Lobster", cursive, sans-serif;
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

	.landing .sub_section {
		display: flex;
		flex-direction: column;
		height: 90vh;
		justify-content: space-around;
	}

	.landing p,
	.landing p em {
		font-size: 1.5rem;
		width: 80%;
		margin: 0 auto;
	}

	.landing p {
		/* margin-bottom: 7rem; */
	}

	.arrows {
		width: 100%;
		text-align: center;
	}
	.arrow img {
	}

	.skills {
		background-color: white;
	}

	.projects {
		background-image: url(${projectsBackgroundMobile});
		background-position: center center;
		height: 300vh;
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
	let myRef = useRef();

	return (
		<MichaelPortfolioStyles>
			<section className="landing">
				<Nav name="Michael Habermas" cvLink="" color="white" />
				<div className="sub_section">
					<div>
						<h1>Hi, I'm Michael</h1>
						<p>
							A passionate Full Stack Web Dev having experience building Web
							applications with JavaScript / React / Nodejs, working in Python,
							plus some other cool libraries and frameworks. I also dabble in
							design, love prototyping, and<em> adore</em> Figma.
						</p>
					</div>
					<div
						className="arrows"
						onClick={() =>
							window.scrollTo({
								behavior: "smooth",
								top: myRef.current.offsetTop,
							})
						}
					>
						<img src={arrows} alt="arrows" />
					</div>
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

			<section className="projects" ref={myRef}>
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
