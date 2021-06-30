import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import heroImg from '../../assets/adrianPage/hero_img.png';
import subImg1 from '../../assets/adrianPage/sub_img_1.png';
import subImg2 from '../../assets/adrianPage/sub_img_2.png';
import subImg3 from '../../assets/adrianPage/sub_img_3.png';

const MAboutPage = styled.div`
	background-color: white;
	height: 100vh;

	h1,
	h3,
	p {
		color: #333333;
	}

	h1 {
		margin-top: 9%;
		margin-bottom: 1%;
		margin-left: 10%;
		font-size: 5rem;
		font-family: 'Lobster', cursive, sans-serif;
	}

	.gradient-text {
		background-color: #f3ec78;
		padding-right: 10px;
		background-image: linear-gradient(45deg, #f3ec78, #af4261);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}

	h3 {
		margin-left: 10%;
		margin-bottom: 3%;
		/* margin-top: 5%; */
		width: 40%;
		font-size: 1.7rem;
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
		/* justify-content: space-evenly; */
		height: 100%;
	}

	.heroImg,
	.subImages,
	.subImg {
		height: auto;
	}

	.heroImg,
	.subImg {
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		border-radius: 20px;
	}

	.heroImg {
		position: absolute;
		right: 10%;
		top: 50%;
		width: 25%;
		transform: translate(0%, -50%);
	}
	.subImages {
		margin-left: 10%;
	}
	.subImg {
		margin-right: 2%;
		width: 13%;
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
		/* width: 40%; */
	}

	.socials > * {
		margin-left: 55px;
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
						the <span className="gradient-text">Vild</span> Side
					</h1>
					<h3>
						From the Mind and hand of <br />
						Adrian van Der Valk
					</h3>
				</div>

				<img className="heroImg" src={heroImg} alt="hero" />

				<div className="subImages">
					<img className="subImg" src={subImg1} alt="pic1" />
					<img className="subImg" src={subImg2} alt="pic2" />
					<img className="subImg" src={subImg3} alt="pic3" />
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
							<GrInstagram />
						</a>
						<a
							href="https://github.com/AdrianHabermas?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ImYoutube />
						</a>
						<a
							href="https://www.linkedin.com/in/adrian-habermas"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>
						<a
							href="https://twitter.com/habermoose"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillFacebook />
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
