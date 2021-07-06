import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import michaelImage from '../assets/michaelPage/Michael.png';
import adrianImage from '../assets/adrianPage/Adrian.png';
import willimage from '../assets/will_page/will.png';

const AboutPage = styled.div`
	background: linear-gradient(170deg, #e8c7fb, #ffffff);
	color: #81374a;
	height: 100%;

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		z-index: 10;
		list-style: none;
		text-decoration: none;
		/* overflow: hidden; */
		margin: 0 auto;
		/* border: 1px solid green; */
	}

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
	}

	img {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}

	.gallery {
		width: 70%;
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
		margin-bottom: -5%;
	}
	.personInfo p {
		width: 80%;
	}

	.description {
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 425px) {
		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}

		h1 {
			padding-top: 5%;
			font-size: 6rem;
			font-weight: 100;
		}
		p {
			font-size: 1rem;
			line-height: 1.3;
		}
		.aboutIntro p {
			width: 90%;
		}
		img {
			width: 70%;
			height: auto;
			margin-bottom: 5%;
		}
		.gallery {
			width: 90%;
		}
		.personInfo {
			flex-direction: column;
			margin-bottom: 5%;
		}
		.personInfoOdd {
			flex-direction: column-reverse;
		}
	}
	@media screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */

		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}

		h1 {
			padding-top: 5%;
			font-size: 6rem;
			font-weight: 100;
		}
		p {
			font-size: 1rem;
			line-height: 1.3;
		}
		.aboutIntro p {
			width: 90%;
		}
		img {
			width: 70%;
			height: auto;
			margin-bottom: 5%;
		}
		.gallery {
			width: 90%;
		}
		.personInfo {
			flex-direction: column;
			margin-bottom: 5%;
		}
		.personInfoOdd {
			flex-direction: column-reverse;
		}
	}
	@media screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}

		h1 {
			padding-top: 5%;
			font-size: 6rem;
			font-weight: 100;
		}
		p {
			font-size: 1rem;
			line-height: 1.3;
		}
		.aboutIntro p {
			width: 40ch;
		}
		img {
			width: 70%;
			height: auto;
		}
		.gallery {
			width: 90%;
		}
	}
	@media screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}

		h1 {
			padding-top: 5%;
			font-size: 6rem;
			font-weight: 100;
		}
		p {
			font-size: 1rem;
			line-height: 1.3;
		}
		.aboutIntro p {
			width: 40ch;
		}
		img {
			width: 70%;
			height: auto;
		}
		.gallery {
			width: 80%;
		}
	}
	@media screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}

		h1 {
			padding-top: 5%;
			font-size: 8rem;
			font-weight: 100;
		}
		p {
			font-size: 1.1rem;
			line-height: 1.3;
		}
		.aboutIntro p {
			width: 40ch;
		}
		img {
			width: 80%;
			height: auto;
		}
		.gallery {
			width: 80%;
		}
	}
	@media screen and (min-width: 1281px) and (max-width: 1500px) {
		aboutIntro {
			padding-top: 10%;
			margin-bottom: 3%;
		}
		h1 {
			font-size: 10rem;
			font-weight: 100;
		}
		p {
			font-size: 1.4rem;
			line-height: 1.2;
		}
		img {
			width: 80%;
			height: auto;
		}
		.gallery {
			width: 80%;
		}
	}
	@media screen and (min-width: 1500px) {
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

				<div className="personInfo personInfoOdd">
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
