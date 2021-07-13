import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Parallax } from 'react-parallax';
import { RiMailFill } from 'react-icons/ri';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import spaceImage from '../../../assets/michaelPage/michael_main_widescreen.svg';
import spaceImageDesktop from '../../../assets/michaelPage/space_background_desktop.svg';
import spaceImageTablet from '../../../assets/michaelPage/space_background_tablet.svg';
import spaceImageTabletTest from '../../../assets/michaelPage/michael_main_tablet.png';
import spaceImageMobile from '../../../assets/michaelPage/space_background_mobile.svg';
import moonImage from '../../../assets/michaelPage/moon.svg';

const MAboutPage = styled.div`
	/* background: url() no-repeat center center fixed; */
	background-image: url(${spaceImageMobile});
	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	inset: 0rem;


	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: space-between;
	height: 100vh;

	* {
		box-sizing: border-box;
		// transition: all 0.2s ease-in-out;
		/* border: 1px solid yellow; */
	}

	.moon {
		display: none;
	}

	.mainAboutDiv {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-self: center;
		width: 80%;
		transform: translateY(70%);
	}

	h1,
	p,
	.seeMore {
		color: white;
	}

	h1 {
		font-size: 2rem;
		text-align: left;
	}

	p {	
		margin-top: 15%;
		font-size: 1.1rem;
		width: 90%;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.seeMore {
		font-size: 1.6rem;
		font-weight: bold;
		transform: translate(6%, -50%);
	}

	.socials {
		display: flex;
		justify-content: space-evenly;
		font-size: 2rem;
		width: 90%;
	}

	.socials > * {
		// margin-left: 20px;
	}

	.socials a {
		color: black;
	}

	.socials a:hover {
		color: white;
		transition: all 0.3s ease-in-out;
	}

	.mailImg {
		margin-top: 1%;
		transform: scale(1.085, 1.16);
	}

	.linkImg {
		transform: scale(1.08, 1);
	}

	@media (max-width: 500px) {

	}
	@media (min-width: 500px) {
		background: url(${spaceImageTabletTest}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			display: block;
			position: absolute;
			bottom: 41%;
			left: 55%;
			transition: all 1s ease-in-out;
			transform: scale(.45)
		}
	
		.moon:hover {
			transition: all 1s ease-in-out;
			transform: scale(.65) translate(-10%, 10%);
		}

		.mainAboutDiv {
			transform: translateY(60%);
		}

		h1 {
			font-size: 2.3rem;
		}

		p {
			font-size: 1.1rem;
			width: 60%;
		}

		.seeMore {
			font-size: 1.7rem;
		}

		.socials {
			font-size: 2.1rem;
		}
	}


	/* Tablet */

	@media (min-width: 650px) {
		background: url(${spaceImageTablet}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			left: 62%;
			bottom: 45%;
			transform: scale(.6)
		}
	
		.moon:hover {
			transform: scale(.8) translate(-10%, 10%);
		}

		.mainAboutDiv {
			transform: translateY(48%);
		}

		h1 {
			font-size: 2.8rem;
		}

		p {
			margin-top: 10%;
			font-size: 1.3rem;
		}

		.seeMore {
			font-size: 1.8rem;
		}

		.socials {
			font-size: 2.3rem;
		}

	@media (min-width: 900px) {
		background: url(${spaceImageTablet}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			left: 68%;
			bottom: 42%;
			transform: scale(.8)
		}
	
		.moon:hover {
			transition: all 1s ease-in-out;
			transform: scale(1) translate(-10%, 10%);
		}

		.mainAboutDiv {
			transform: translateY(55%);
		}

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 1.4rem;
		}

		.seeMore {
			font-size: 1.8rem;
		}

		.socials {
			font-size: 2.3rem;
		}
	}

	@media (min-width: 1000px) {
		background: url(${spaceImageDesktop}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			left: 68%;
			bottom: 42%;
			transform: scale(.8)
		}
	
		.moon:hover {
			transition: all 1s ease-in-out;
			transform: scale(1) translate(-10%, 10%);
		}

		.mainAboutDiv {
			transform: translateY(53%);
			width: 85%;
		}

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 1.4rem;
		}

		footer {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
		}
	
		.seeMore {
			font-size: 2.6rem;
			transform: translateY(-10%);
		}

		.socials {
			justify-content: space-between;
			font-size: 3rem;
			width: 30%;
			margin-right: 2%;
			margin-left: 7%;
		}
	}
	@media (min-width: 1400px) {
		background: url(${spaceImage}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;

		.moon {
			left: 68%;
			bottom: 42%;
			transform: scale(.8)
		}
	
		.moon:hover {
			transition: all 1s ease-in-out;
			transform: scale(1) translate(-10%, 10%);
		}

		.mainAboutDiv {
			transform: translateY(60%);
		}

		h1 {
			font-size: 3.2rem;
		}

		p {
			margin-top: 5%;
			font-size: 1.6rem;
		}

		footer {
			margin-bottom: 1%;
		}
	
		.seeMore {
			font-size: 2.6rem;
		}

		.socials {
			justify-content: space-between;
			font-size: 3rem;
			width: 35%;
			padding-left: 8%;
			margin-right: 2%;
			margin-left: 8%;
		}

	}
`;

const MichaelAbout = () => {
	return (
		<MAboutPage>

				<img className="moon" src={moonImage} alt="moon" />
				<div className="mainAboutDiv">
					<h1>Hi, I'm Michael.</h1>
					<p>
						A passionate Full Stack Web Developer having experience
						building Web applications with JavaScript / Reactjs /
						Nodejs, some other cool libraries and frameworks. I also
						dabble in design, love prototyping, and<em> adore</em>{' '}
						Figma.
					</p>
				</div>
				<footer>
					<Link
						className="seeMore"
						to="/personal-info/michael/projects"
					>
						See more...
					</Link>
					<div className="socials">
						<a
							href="https://github.com/MichaelHabermas?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/michael-habermas"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>
						<a href="mailto:michaelghabermas@gmail.com">
							<RiMailFill className="mailImg" />
						</a>
						<a
							href="https://twitter.com/habermoose"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitterSquare />
						</a>
					</div>
				</footer>

		</MAboutPage>
	);
};

export default MichaelAbout;
