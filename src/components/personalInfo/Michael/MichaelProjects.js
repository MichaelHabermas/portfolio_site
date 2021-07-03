import React from 'react';
import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

import cyanBack from '../../../assets/michaelPage/RectangleCyan.svg';
import profilePic from '../../../assets/michaelPage/michael_peru_buddy.png';
import project_1 from '../../../assets/michaelPage/p1_recipeazy.png';
import project_2 from '../../../assets/michaelPage/p2_water_plants.png';
import project_3 from '../../../assets/michaelPage/p3_adrian_page.png';
import project_4 from '../../../assets/michaelPage/p4_workout.png';
import project_5 from '../../../assets/michaelPage/p5_language.png';
import project_6 from '../../../assets/michaelPage/p6_oldmaid.png';
import project_7 from '../../../assets/michaelPage/p7_geo_images.png';
import webIcon from '../../../assets/generalAssets/web_icon.svg';

const ProjectsPage = styled.div`
	background: url(${cyanBack}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 10%;
		width: 60%;
		margin: 0 auto;
		margin-bottom: 5%;
	}

	h1 {
		padding: 4%;
		background-color: #f3ec78;
		padding-right: 10px;
		background-image: linear-gradient(
			140deg,
			#000000,
			#000000,
			#ff0000,
			#ff0000
		);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;

		font-size: 3rem;
	}

	.fancyFont {
		font-size: 10rem;
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 100;
	}

	header p {
		padding: 4%;
	}

	.gallery {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
	}

	.projZone {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-bottom: 3%;
	}

	.artBoard {
		flex-direction: column;
		text-align: center;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	p {
		width: 70%;
		margin: 5%;
		font-size: 1.8rem;
	}

	.projPic {
		transform: scale(0.95);
	}

	.browserIcon {
		transform: scale(0.7);
	}

	.gitIcon {
		transform: scale(3);
	}

	@media only screen and (max-width: 425px) {
	}
	@media only screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media only screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media only screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
	}
	@media only screen and (min-width: 1500px) {
	}
`;

const MichaelProjects = () => {
	return (
		<ProjectsPage>
			<header>
				<h1>
					About: <span className="fancyFont">Michael</span>
				</h1>
				<img src={profilePic} alt="Michael" />
			</header>
			<div className="gallery">
				<div className="projZone">
					<img className="projPic" src={project_1} alt="project 1" />
					<div className="info">
						<p>
							Contributed to the design and implementation of a
							React app that gathers and shares family recipes.
							This app uses Redux to manage state, and makes axios
							calls to our concurrent team’s Node API.
						</p>
						<FaGithub className="gitIcon" />
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<p>
							Implemented a Redux state management system to our
							team’s React application. The app helped its users
							organize their time and efforts towards keeping
							their plants healthy and watered.
						</p>
						<FaGithub className="gitIcon" />
					</div>
					<img className="projPic" src={project_2} alt="project 2" />
				</div>
				<div className="projZone">
					<img className="projPic" src={project_3} alt="project 3" />
					<div className="info">
						<p>
							Created a personal site for an up-and-coming local
							Los Angeles character artist. Designed layout and
							collaborated on background displays for each
							character.
						</p>
						<img
							className="browserIcon"
							src={webIcon}
							alt="web icon"
						/>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<p>
							Built a Restful CRUD API for a fitness class
							reservation application using Node.js and Express as
							well as used JWT authentication for login security,
							while a concurrent team built out the design and
							features for front end using React/Redux
						</p>
						<FaGithub className="gitIcon" />
					</div>
					<img className="projPic" src={project_4} alt="project 4" />
				</div>
				<div className="projZone">
					<img className="projPic" src={project_5} alt="project 5" />
					<div className="info">
						<p>
							A current super-secret project that’s in the works.
							Aspires to bring a new approach to the foreign
							language learning world. Don’t tell anyone....
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<p>
							Collaborated on this small project based on the
							classic card game, Old Maid. Contributions include
							asset design as well as functionality.
						</p>
						<img
							className="browserIcon"
							src={webIcon}
							alt="web icon"
						/>
					</div>
					<img className="projPic" src={project_6} alt="project 6" />
				</div>
				<div className="projZone artBoard">
					<img className="projPic" src={project_7} alt="project 7" />
					<p>
						A selection of designs constructed with Figma in a
						conceptual style art.
					</p>
				</div>
			</div>
		</ProjectsPage>
	);
};

export default MichaelProjects;
