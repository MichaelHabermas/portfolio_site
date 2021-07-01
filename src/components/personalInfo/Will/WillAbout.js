import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import mountainSide from '../../../assets/will_page/will_main_widescreen.svg';

const WAboutPage = styled.div`
	background: url(${mountainSide}) no-repeat center center fixed;
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
		position: absolute;
		/* width: 40%; */
		top: 22%;
		left: 10%;
		font-size: 6.5rem;
	}

	p {
		position: absolute;
		width: 40%;
		top: 43%;
		right: 10%;
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
		left: 10%;
		font-size: 2.5rem;
		font-weight: bold;
		transform: translate(0%, -100%);
	}

	.socials {
		position: absolute;
		right: 10%;
		bottom: 5%;
		font-size: 4rem;
		transform: translate(0%, -40%);
	}

	.socials > * {
		margin-left: 20px;
	}

	.socials a {
		color: white;
	}

	.socials a:hover {
		color: #5080a2;
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

const WillAbout = () => {
	return (
		<WAboutPage>
			<div className="test">
				<div>
					<h1>Hi, I'm Will.</h1>
					<p>
						{/* // fix this  */}A passionate Full Stack Web
						Developer having experience building Web applications
						with JavaScript / React / Nodejs, some other cool
						libraries and frameworks. I also dabble in design, love
						prototyping, and <em>adore</em> Figma.
					</p>
				</div>
				<footer>
					<Link className="seeMore" to="/personal-info/Will/projects">
						See more...
					</Link>
					<div className="socials">
						<a
							// fix this
							href="https://github.com/willHabermas?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							// fix this
							href="https://www.linkedin.com/in/will-habermas"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>

						<a href="mailto:willghabermas@gmail.com">
							{' '}
							{/* // fix this */}
							<RiMailFill className="mailImg" />
						</a>
						<a
							// fix this
							href="https://twitter.com/habermoose"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitterSquare />
						</a>
					</div>
				</footer>
			</div>
		</WAboutPage>
	);
};

export default WillAbout;
