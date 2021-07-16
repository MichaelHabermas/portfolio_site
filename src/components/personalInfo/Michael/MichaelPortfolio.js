import React, { useRef } from "react";
import styled from "styled-components";

// component import
import Nav from "../../personal_info_2/about_us_nav";
import SkillCard from "../../SkillCard";

// icon imports
import iconComponent from "../../../assets/icons";

// import { RiMailFill } from "react-icons/ri";
// import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

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
		/* border: 1px dotted rebeccapurple; */
	}

	h1,
	h2 {
		text-align: center;
	}

	h2 {
		font-size: 6rem;
		background-image: linear-gradient(
			170deg,
			#000000,
			#000000,
			#000000,
			#000000,
			#000000,
			#ff0000,
			#ff0000,
			#ff0000,
			#ff0000,
			#ff0000
		);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-family: "Lobster", cursive, sans-serif;
		margin-bottom: 2rem;
	}

	.landing,
	.skills,
	.projects {
	}
	.sub_section {
		width: 90%;
		margin: 0 auto;
	}

	// LANDING PAGE SECTION
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

	h1 {
		font-size: 6rem;
		width: 90%;
		margin: 0 auto 3rem;
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

	// SKILLS
	.skills {
		background-color: white;
		padding: 3rem;
	}

	.skill_icons {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.icon {
		font-size: 6rem;
	}

	// PROJECTS
	.projects {
		background-image: url(${projectsBackgroundMobile});
		background-position: center center;
		height: 300vh;
		/* background-attachment: fixed; */
		background-repeat: no-repeat;
		background-size: cover;
		padding: 3rem;
	}

	//		FOOTER		 						FOOTER											FOOTER

	footer {
		display: flex;
		background-color: purple;
		height: 25vh;
	}

	.footerMain {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	.footerIcon .icon {
		font-size: 3rem;
		color: white;
	}

	.cvContainer {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.cvFooterIcon {
		color: white;
	}

	.cvFooterText {
		transform: translateY(-30%);
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
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

	const skillIcons = [
		"HTML5",
		"CSS3",
		"Javascript",
		"React",
		"NodeJS",
		"Python",
		"GitHub",
		"Heroku",
		"Postgresql",
		"Postman",
		"Figma",
		"Audacity",
	];

	const contactInfo = [
		{name: "GitHub", link: "https://github.com/MichaelHabermas"},
		{name: "LinkedIn", link: "https://www.linkedin.com/in/michael-habermas/"},
		{name: "CV", link: ""},
		{name: "Twitter", link: ""},
		{name: "Email", link: ""}
	]


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
						{skillIcons.map(icon => {
							return (
								<SkillCard
									iconImg={iconComponent[icon][0]}
									iconName={iconComponent[icon][1]}
								/>
							);
						})}
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
				</div>
			</section>
			<footer>
				<div className='footerMain'>
					{contactInfo.map(icon => {
						const { name, link } = icon
						if(name !== "CV") {
							return (
								<a
									href={`${link}`} //need to add the real cv link here
									target="_blank"
									rel="noreferrer"
									className='footerIcon'
								>
									{iconComponent[name][0]}
								</a>
						)} else {
								return (
									<div className="cvContainer">
										<a
											href={`${link}`} //need to add the real cv link here
											target="_blank"
											rel="noreferrer"
											className='cvFooterIcon'
										>
											{iconComponent[name][0]}
										</a>
										<a
											href={`${link}`} //need to add the real cv link here
											target="_blank"
											rel="noreferrer"
											className='cvFooterText'
										>
											{iconComponent[name][1]}
										</a>
									</div>
								)
							}
					})}
				</div>
			</footer>
		</MichaelPortfolioStyles>
	);
}

export default MichaelPortfolio;
