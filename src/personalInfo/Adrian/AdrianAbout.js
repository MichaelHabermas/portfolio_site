import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
// import spaceImage from '../../assets/adrianPage/adrian_main_widescreen.svg';
// import moonImage from '../../assets/adrianPage/moon.svg';

const MAboutPage = styled.div`
	background-color: white;
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
	h3,
	p {
		color: #333333;
	}

	h1 {
		margin-left: 10%;
		margin-bottom: 4%;
		margin-top: 5%;
		font-size: 5rem;
		font-family: 'Lobster', cursive, sans-serif;
	}

	h3 {
		margin-left: 10%;
		margin-bottom: 4%;
		margin-top: 5%;
		width: 40%;
		font-size: 2rem;
		font-weight: 600;
		color: #555555;
	}

	p {
		position: absolute;
		width: 40%;
		left: 10%;
		bottom: 10%;
		font-size: 1rem;
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
		color: #333333;
	}

	.socials a:hover {
		color: orange;
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

const AdrianAbout = () => {
	return (
		<MAboutPage>
			<div className="test">
				<div>
					<h1>
						Take a Valk on
						<br />
						the Vild Side
					</h1>
					<h3>
						From the Mind and hand of <br />
						Adrian van Der Valk
					</h3>
				</div>
				<footer>
					<p>
						Copyright ©2021 Adrian van der Valk. All Rights
						Reserved.
					</p>
					<div className="socials">
						<a
							href="https://github.com/AdrianHabermas?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/adrian-habermas"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>
						<a href="mailto:adrianghabermas@gmail.com">
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

export default AdrianAbout;
