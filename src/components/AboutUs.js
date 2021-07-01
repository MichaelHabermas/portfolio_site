import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import michaelImage from '../assets/michaelPage/Michael.png';
import adrianImage from '../assets/adrianPage/Adrian.png';
import willimage from '../assets/will_page/will.png';

const AboutPage = styled.div`
	background: linear-gradient(170deg, #e8c7fb, #ffffff);
	color: #81374a;

	.aboutIntro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 10%;
		margin-bottom: 3%;
	}

	h1 {
		margin: 0 auto;
		font-family: 'Stalemate', cursive;
		font-size: 12rem;
		font-weight: 100;
		color: white;
		transform: translate(-3%, 0);
		line-height: 1;
	}

	p {
		font-size: 1.7rem;
		line-height: 1.5;
	}

	.aboutIntro p {
		width: 40ch;
		margin: 0 auto;
		font-size: 1.7rem;
	}

	img {
		border-radius: 50%;
	}

	.gallery {
		width: 70%;
		margin: 0 auto;
		padding-bottom: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.personInfo {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.personInfo p {
		width: 80%;
	}

	.description {
		width: 80%;
		display: flex;
		justify-content: center;
	}
`;

const AboutUs = () => {
	return (
		<AboutPage>
			<div className="aboutIntro">
				<h1>About This Site</h1>

				<p>
					This portfolio site is a collaborative work through the
					effort of Will Moon, Adrian van der Valk, and Michael
					Habermas. Click on the links below to learn more more about
					each individual and their talents. A special thanks goes out
					to Vera P. and Devin M. for their specialized
					contributions... You Rock!!!
				</p>
			</div>

			<div className="gallery">
				<div className="personInfo">
					<Link to="/personal-info/will">
						<img src={willimage} alt="Will" />
					</Link>
					<div className="description">
						<p>
							This portfolio site is a collaborative work through
							the effort of Will Moon, Adrian Van Der Valk, and
							Michael Habermas. Click on the links below to learn
							more more about each individual. A special thanks
							goes out to Vera P. and Devin M. for their
							specialized contributions.
						</p>
					</div>
				</div>

				<div className="personInfo">
					<div className="description">
						<p>
							Michael is a former overseas teacher of ten years.
							Driven by inefficiencies in the educational system,
							he found a new passion in the problem solving arena
							of software development. Michael values clarity and
							simplicity while performing rapid and efficient
							deployment.
						</p>
					</div>
					<Link to="/personal-info/michael">
						<img src={michaelImage} alt="Michael" />
					</Link>
				</div>

				<div className="personInfo">
					<Link to="/personal-info/adrian">
						<img src={adrianImage} alt="Adrian" />
					</Link>
					<div className="description">
						<p>
							This portfolio site is a collaborative work through
							the effort of Will Moon, Adrian Van Der Valk, and
							Michael Habermas. Click on the links below to learn
							more more about each individual. A special thanks
							goes out to Vera P. and Devin M. for their
							specialized contributions.
						</p>
					</div>
				</div>
			</div>
		</AboutPage>
	);
};

export default AboutUs;
