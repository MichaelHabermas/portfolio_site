import React, { useRef } from "react";
import styled from "styled-components";

// component import
import Nav from "../../personal_info_2/about_us_nav";
import SkillCard from "../../SkillCard";
import ProjectCard from "../../ProjectCard";

// icon imports
import iconComponent from "../../../assets/icons";

// asset imports
import landingBackgroundMobile from "../../../assets/will_page/will_landing_background_mobile2.svg";
import landingBackgroundTablet from "../../../assets/will_page/will_landing_background_tablet.svg";
import landingBackgroundDesktop from "../../../assets/will_page/will_landing_background_desktop.svg";
import landingBackgroundDesktopWide from "../../../assets/will_page/will_landing_background_desktop_wide.svg";
import landingBackgroundExtraWide from "../../../assets/will_page/will_landing_background_extra_wide.svg";
import projectsBackgroundMobile from "../../../assets/michaelPage/projects_background_mobile.png";
import arrows from "../../../assets/will_page/arrows_will.svg";
import cvLink from "../../../assets/resumes/mhabermas_webdev_resume_8_2021.pdf";

// project imports
import { willsProjects } from "../../../assets/projects";

// built for mobile first, media queries at the end
const WillPortfolioStyles = styled.div`
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
		font-size: 1.5rem;
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
		margin: 0 auto 3rem;
	}

	.landing p {
		font-size: 1.5rem;
		width: 80%;
		margin: 0 auto;
		line-height: 1.5;
	}

	.moon_group {
		display: none;
	}

	.arrows {
		width: 100%;
		text-align: center;
	}

	.arrows img,
	.icon,
	.cvContainer:hover {
		transition: all 0.2s ease-in-out;
	}

	.arrows img:hover,
	.icon:hover,
	.cvContainer:hover {
		transform: scale(1.1);
	}

	// SKILLS PAGE SECTION											SKILLS
	.skills {
		background-color: white;
		padding: 3rem 0;
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
		padding: 3rem 0;
	}

	.project_cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
		margin: 0 auto;
	}

	.project_card {
		transition: all 0.2s ease-in-out;
	}
	.project_card p {
		font-size: 2rem;
		line-height: 1.5;
	}

	.project_card .icon {
		font-size: 6rem;
	}

	.project_card .icon:hover {
		color: white;
	}

	//	FOOTER SECTION											         FOOTER
	footer {
		display: flex;
		background-color: purple;
		height: 12vh;
	}

	.footerMain {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	.footerIcon .icon {
		font-size: 3.5rem;
		color: white;
	}

	.cvContainer {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.cvFooterIcon .icon {
		color: white;
		font-size: 4.7rem;
		transform: translateY(6%);
	}

	.cvFooterText {
		transform: translateY(-16%);
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
	}

	//	MEDIA QUERIES										                                         MEDIA Q's

	// this is attempt to fix the iphone landscape issues. NEEDS WORK
	@media all and (orientation: landscape) {
		/* .landing {
			height: 130vh;
		} */
	}

	@media screen and (min-width: 480px) {
		.landing {
			background-image: url(${landingBackgroundTablet});
		}
		.landing p {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 768px) {
		.sub_section {
			width: 80%;
			padding: 0;
		}
		.landing {
			background-image: url(${landingBackgroundDesktop});
		}

		h1 {
			font-size: 7rem;
		}

		.landing .sub_section {
			display: flex;
			flex-direction: column;
		}

		.landing p {
			margin-top: 10%;
			font-size: 2.5rem;
			width: 50%;
		}

		.project_cards {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			width: 100%;
		}

		// SKILLS						SKILLS							SKILLS

		.skills {
			width: 100%;
			background-color: white;
		}

		// FOOTER						FOOTER							FOOTER

		.footerMain .icon {
			font-size: 3.5rem;
		}

		.cvFooterIcon .icon {
			font-size: 4rem;
		}

		.cvFooterText {
			font-size: 1.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.sub_section {
			width: 80%;
		}

		.landing {
			background-image: url(${landingBackgroundDesktopWide});
		}
		h1 {
			font-size: 8rem;
			text-align: left;
		}
		h2 {
			font-size: 7rem;
		}

		.landing_p {
			margin: 0;
			font-size: 2.5rem;
			text-align: left;
			width: 50%;
			float: right;
		}

		.moon_group {
			display: initial;
			position: absolute;
			top: 20%;
			right: 7%;
			transform: scale(0.8);
			transition: all 0.8s ease;
		}
		.moon,
		.mer_face {
			position: absolute;
			top: 0;
			right: 0;
			transition: all 0.8s ease;
		}
		.moon {
			transform: translate(-5.5%, 5.5%);
		}
		.mer_face {
			opacity: 0.5;
		}

		.moon_group:hover {
			transform: scale(1.05);
		}

		.mer_face:hover {
			transform: rotate(280deg);
			opacity: 1;
		}

		// SKILLS						SKILLS							                                    SKILLS
		.skill_icons {
			justify-content: space-between;
		}

		// PROJECTS						PROJECTS							                        PROJECTS
		.project_card {
			max-width: 48%;
		}

		// FOOTER						FOOTER							                            FOOTER
		.footerMain {
			justify-content: space-around;
			padding: 0 15%;
		}

		.footerIcon .icon,
		.cvFooterIcon .icon {
			font-size: 4rem;
		}

		.cvFooterText {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.landing {
			background-image: url(${landingBackgroundExtraWide});
		}

		h1 {
			font-size: 7.5rem;
			margin-top: 3%;
		}

		.landing p {
			margin-top: 5%;
			width: 60%;
		}

		// SKILLS						SKILLS							SKILLS
		.skill_icons .icon {
			font-size: 7rem;
		}

		// PROJECTS						PROJECTS							PROJECTS

		.footerMain {
			justify-content: space-around;
			padding: 0 20%;
		}

		.footerIcon .icon,
		.cvFooterIcon .icon {
			font-size: 4.5rem;
		}
	}
	@media screen and (min-width: 1550px) {
		.moon_group {
			transform: scale(1);
		}
		.moon_group:hover {
			transform: scale(1.4);
		}

		.project_card {
			max-width: 32%;
		}

		.footerMain {
			justify-content: space-around;
			padding: 0 25%;
		}
	}
`;

function WillPortfolio() {
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
	];

	const contactInfo = [
		{ iconName: "GitHub", location: "https://github.com/willmoon19" },
		{
			iconName: "LinkedIn",
			location: "https://www.linkedin.com/in/william-d-moon/",
		},
		{ iconName: "CV", location: `${cvLink}` },
		{ iconName: "Twitter", location: "" },
		{ iconName: "Email", location: "mailto:wmoon0113@gmail.com" }, // add in a modal for this...?
	];

	return (
		<WillPortfolioStyles>
			<section className="landing">
				<Nav name="Will Moon" cvLink={`${cvLink}`} color="white" />
				<div className="sub_section">
					<div>
						<h1>Hi, I'm Will</h1>
						<p className="landing_p">
							A passionate Full Stack Web Dev having experience building Web
							applications with JavaScript / React / Nodejs, working in Python,
							plus some other cool libraries and frameworks.
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
						{willsProjects.map(project => {
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
									href={`${location}`}
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
								<div className="cvContainer" key={Math.random()}>
									<a
										href={`${location}`}
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
		</WillPortfolioStyles>
	);
}

export default WillPortfolio;
