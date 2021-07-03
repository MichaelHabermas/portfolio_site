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
	background: url(${spaceImage}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height: 100vh;

	* {
		transition: all .5s ease-in-out;
		border: 1px solid yellow;
	}

	.moon {
		position: absolute;
		bottom: 50%;
		right: 10%;
		transition: all 1s ease-in-out;
	}
	
	.moon:hover {
		transform: scale(1.5) translate(-10%, 10%);
	}

	h1,
	p,
	.seeMore {
		color: white;
	}

	h1 {
		margin-left: 10%;
		margin-bottom: 4%;
		margin-top: 5%;
		font-size: 5rem;
	}

	p {
		width: 40%;
		margin-left: 10%;
		font-size: 1.7rem;
	}

	.test {
		display: flex;
		flex-flow: column;
		justify-content: space-evenly;
		height: 100vh;
	}

	.seeMore {
		position: absolute;
		bottom: 5%;
		left: 50%;
		font-size: 2.5rem;
		font-weight: bold;
		transform: translate(-60%, -50%);
	}

	.socials {
		position: absolute;
		right: 10%;
		bottom: 5%;
		font-size: 3rem;
		transform: translate(0%, -50%);
	}

	.socials > * {
		margin-left: 20px;
	}

	.socials a {
		color: black;
	}

	.socials a:hover {
		color: white;
		transition: all 0.3s;
	}

	.mailImg {
		margin-top: 1%;
		transform: scale(1.085, 1.16);
	}

	.linkImg {
		transform: scale(1.08, 1);
	}

	@media (max-width: 426px) {
		background: url(${spaceImageMobile}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			display: none;
		}
	
		h1 {
			font-size: 2rem;
			margin-left: 50%;
			transform: translate(-50%, -50%);
			// text-align: center
			// width: 100%;
		}
	
		p {
			font-size: 1rem;
			margin-left: 8%;
			width: 50%;
		}
	
		.seeMore {
			left: 52%;
			font-size: 2rem;
		}
	
		.socials {
			right: 8%;
			bottom: 4%;
			font-size: 2.2rem;
		}
	}
	@media screen and (min-width: 427px) and (max-width: 641px) {
		background: url(${spaceImageTabletTest}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;
		width: 100vw;

		.moon {
			right: 2%;
			bottom: 43%;
			transform: scale(.6);
		}
	
		h1 {
			font-size: 2.2rem;
			margin-left: 50%;
			transform: translate(-50%, -50%);
			// text-align: center
			// width: 100%;
		}
	
		p {
			font-size: 1.2rem;
			margin-left: 8%;
			width: 50%;
		}
	
		.seeMore {
			left: 52%;
			font-size: 2rem;
		}
	
		.socials {
			right: 8%;
			bottom: 4%;
			font-size: 2.2rem;
		}
	}

	@media (min-width: 642px) and (max-width: 799px) {
		background: url(${spaceImageTablet}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;
		
		.moon {
			right: 2%;
			bottom: 43%;
			transform: scale(.6);
		}
	
		.moon:hover {
			transform: scale(.6) translate(-8%, 8%);
		}

		h1 {
			font-size: 2.5rem;
			margin-left: 8%;
			margin-bottom: 7%;
			margin-top: 6%;
		}
	
		p {
			font-size: 1.1rem;
			margin-left: 8%;
			width: 50%;
		}
	
		.seeMore {
			left: 55%;
			bottom: 3%;
			font-size: 1.5rem;
		}
	
		.socials {
			right: 4%;
			bottom: 1.5%;
			font-size: 2rem;
		}
	}

	@media (min-width: 800px) and (max-width: 961px) {
		background: url(${spaceImageTablet}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;
		
		.moon {
			right: 4%;
			transform: scale(.7);
		}
	
		.moon:hover {
			transform: scale(.9) translate(-8%, 8%);
		}
	
		h1 {
			font-size: 3rem;
			margin-left: 8%;
		}
	
		p {
			font-size: 1.3rem;
			margin-left: 8%;
			width: 50%;
		}
	
		.seeMore {
			left: 52%;
			font-size: 2rem;
		}
	
		.socials {
			right: 8%;
			bottom: 4%;
			font-size: 2.2rem;
		}
	}
	@media (min-width: 962px) and (max-width: 1281px) {
		background: url(${spaceImageDesktop}) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100vh;

		.moon {
			right: 8%;
			transform: scale(.8);
		}

		.moon:hover {
			transform: scale(1.2) translate(-8%, 8%);
		}

		h1 {
			font-size: 4rem;
			margin-left: 8%;
		}

		p {
			font-size: 1.5rem;
			margin-left: 8%;
		}

		.seeMore {
			left: 52%;
			font-size: 2.2rem;
		}

		.socials {
			right: 8%;
			bottom: 4%;
			font-size: 2.5rem;
		}
	}
`;

const MichaelAbout = () => {
	return (
		<MAboutPage>
			<div className="test">
				<img className="moon" src={moonImage} alt="moon" />
				<div>
					<h1>Hi, I'm Michael.</h1>
					<p>
						A passionate Full Stack Web Developer having experience
						building Web applications with JavaScript / Reactjs /
						Nodejs, some other cool libraries and frameworks. I also
						dabble in design, love prototyping, and <em>adore</em>{' '}
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
			</div>
		</MAboutPage>
	);
};

export default MichaelAbout;
