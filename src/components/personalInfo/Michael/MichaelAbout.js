import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Parallax } from 'react-parallax';
import { RiMailFill } from 'react-icons/ri';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import spaceImage from '../../../assets/michaelPage/michael_main_widescreen.svg';
import moonImage from '../../../assets/michaelPage/moon.svg';

const MAboutPage = styled.div`
	background: url(${spaceImage}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height: 100vh;

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
		height: 100%;
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
