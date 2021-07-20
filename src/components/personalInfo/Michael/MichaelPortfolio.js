import React, { useRef } from "react";
import styled from "styled-components";

// component import
import Nav from "../../personal_info_2/about_us_nav";
import SkillCard from "../../SkillCard";
import ProjectCard from "../../ProjectCard";

// icon imports
import iconComponent from "../../../assets/icons";

// asset imports
import landingBackgroundMobile from "../../../assets/michaelPage/michael_landing_background_mobile.svg";
import landingBackgroundTablet from "../../../assets/michaelPage/michael_landing_background_tablet.svg";
import landingBackgroundDesktop from "../../../assets/michaelPage/michael_landing_background_desktop.svg";
import landingBackgroundDesktopWide from "../../../assets/michaelPage/michael_landing_background_desktop_wide.svg";
import landingBackgroundExtraWide from "../../../assets/michaelPage/michael_landing_background_extra_wide.svg";
import projectsBackgroundMobile from "../../../assets/michaelPage/projects_background_mobile.png";
import arrows from "../../../assets/michaelPage/arrows.svg";

// project imports
import { michaelsProjects } from "../../../assets/projects";

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

	// LANDING PAGE SECTION											LANDING
	.landing {
		background-image: url(${landingBackgroundMobile});
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		-webkit-background-size: cover;
		height: 95vh;
		color: white;
		/* this is so the background sizing works properly for iOS mobile Safari */
		@supports not (-webkit-overflow-scrolling: touch) {
			background-attachment: fixed;
		}
	}

	.landing .sub_section {
		display: flex;
		flex-direction: column;
		height: 90vh;
		justify-content: space-around;
	}

	h1 {
		font-size: 6rem;
		/* width: 90%; */
		margin: 0 auto 3rem;
	}

	.landing p,
	.landing p em {
		font-size: 1.5rem;
		width: 80%;
		margin: 0 auto;
	}

	.arrows {
		width: 100%;
		text-align: center;
	}

	// SKILLS PAGE SECTION											SKILLS
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

	// PROJECTS PAGE SECTION											PROJECTS
	.projects {
		background-image: url(${projectsBackgroundMobile});
		background-position: center center;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		padding: 3rem;
	}

	.project_cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	//	FOOTER SECTION											         FOOTER
	footer {
		display: flex;
		background-color: purple;
		height: 16vh;
	}

	.footerMain {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	.footerIcon .icon {
		font-size: 4rem;
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
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
	}

	//	MEDIA QUERIES										                MEDIA Q's
	@media screen and (min-width: 480px) {
		color: blue;
		.landing {
			background-image: url(${landingBackgroundTablet});
		}
	}
	@media screen and (min-width: 768px) {
		color: red;

		.sub_section {
			width: 80%;
			padding: 0;
		}
		.landing {
			background-image: url(${landingBackgroundDesktop});
		}

		h1 {
			font-size: 7rem;
			/* width: 90%; */
			/* margin: 0 0 3rem 0; */
		}
		.landing p {
			margin-top: 10%;
			font-size: 2.5rem;
		}

		.landing p em {
			font-size: 2.5rem;
		}

		.skill_icons {
			flex-wrap: nowrap;
		}

		.icon {
			font-size: 5rem;
		}

		.footerMain .icon {
			font-size: 6rem;
		}

		.cvFooterIcon .icon {
			font-size: 7.5rem;
		}

		.cvFooterText {
			font-size: 2.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		color: blue;
		.landing {
			background-image: url(${landingBackgroundDesktopWide});
		}
		h1 {
			font-size: 8rem;
			text-align: left;
			/* font-size: 6.5rem; */
			/* width: 90%; */
			/* margin: 0 0 3rem 0; */
		}

		.landing p {
			margin: 0;
			margin-top: 8%;
			font-size: 2.5rem;
			text-align: left;
			width: 50%;
		}

		.landing p em {
			font-size: 3rem;
		}

		.skill_icons .icon {
			font-size: 6.5rem;
		}

		.skill_icons .iconTitle_card {
			font-size: 1.9rem;
		}

		.skill_icons {
			flex-wrap: nowrap;
		}

		.icon {
			font-size: 6rem;
		}
		.project_card {
			max-width: 48%;
		}

		.footerMain {
			justify-content: space-around;
			padding: 0 15%;
		}

	}
	@media screen and (min-width: 1200px) {
		color: red;
		.landing {
			background-image: url(${landingBackgroundExtraWide});
		}
		h1 {
			font-size: 9rem;
		}

		.skills .icon {
			font-size: 8rem;
		}
		
		.footerMain {
			justify-content: space-around;
			padding: 0 20%;
		}

	}
	@media screen and (min-width: 1550px) {
		color: blue;
		.project_card {
			max-width: 32%;
		}

		.footerMain {
			justify-content: space-around;
			padding: 0 25%;
		}
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
		{ iconName: "GitHub", location: "https://github.com/MichaelHabermas" },
		{
			iconName: "LinkedIn",
			location: "https://www.linkedin.com/in/michael-habermas/",
		},
		{ iconName: "CV", location: "" },
		{ iconName: "Twitter", location: "" },
		{ iconName: "Email", location: "" },
	];

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
									component={iconComponent[icon]["component"]}
									iconName={iconComponent[icon]["iconName"]}
									key={Math.random()}
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
						{michaelsProjects.map(project => {
							return (
								<div className="project_card" key={Math.random()}>
									<ProjectCard
										image={project["image"]}
										text={project["text"]}
										icons={project["icons"]}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<footer>
				<div className="footerMain">
					{contactInfo.map(icon => {
						const { iconName, location } = icon;
						if (iconName !== "CV") {
							return (
								<a
									href={`${location}`} //need to add the real cv link here
									target="_blank"
									rel="noreferrer"
									className="footerIcon"
									key={Math.random()}
								>
									{iconComponent[iconName]["component"]}
								</a>
							);
						} else {
							return (
								<div className="cvContainer">
									<a
										href={`${location}`} //need to add the real cv link here
										target="_blank"
										rel="noreferrer"
										className="cvFooterIcon"
									>
										{iconComponent[iconName]["component"]}

										<h5 className="cvFooterText">CV</h5>
									</a>
								</div>
							);
						}
					})}
				</div>
			</footer>
		</MichaelPortfolioStyles>
	);
}

export default MichaelPortfolio;
