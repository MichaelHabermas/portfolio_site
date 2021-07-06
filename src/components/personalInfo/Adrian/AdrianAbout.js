import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import heroImg from '../../../assets/adrianPage/hero_img.png';
import subImg1 from '../../../assets/adrianPage/sub_img_1.png';
import subImg2 from '../../../assets/adrianPage/sub_img_2.png';
import subImg3 from '../../../assets/adrianPage/sub_img_3.png';

const MAboutPage = styled.div`
	background-color: white;
	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	inset: 0rem;

	height: 100vh;

	overflow: hidden;
	overscroll-behavior: none;
	-webkit-overflow-scrolling: touch;

	* {
		/* border: 1px solid orange; */
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	h1,
	h3,
	p {
		color: #333333;
	}

	h1 {
		margin-top: 7%;
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

	h1,
	h3 {
		width: 50%;
	}

	h3 {
		font-size: 1.7rem;
		font-weight: 600;
		color: #555555;
	}

	p {
		font-size: 1rem;
	}

	.container {
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		height: 100%;
		width: 80%;
		margin: 0 auto;
	}

	.heroImg,
	.subImages,
	.subImg {
		height: auto;
	}

	.heroImg,
	.subImg {
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		border-radius: 30px;
	}

	.heroImg {
		position: absolute;
		right: 10%;
		top: 50%;
		width: 28%;
		transform: translate(0%, -50%);
	}
	.subImages {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 60%;
	}
	.subImg {
		width: 30%;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		margin: 0 auto;
	}

	.socials {
		font-size: 3rem;
		display: flex;
		justify-content: flex-end;
		width: 50%;
	}

	.socials a {
		margin: 0 1.2%;
		color: #333333;
	}

	.socials a * {
		display: flex;
	}

	.socials a:hover {
		color: orange;
		transition: all 0.3s;
	}

	// MEDIA QUERIES
	@media only screen and (max-width: 425px) {
		h1 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1rem;
		}
		.socials {
			font-size: 2.7rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		h1 {
			font-size: 3rem;
		}
		h3 {
			font-size: 1rem;
		}
		.socials {
			font-size: 2.7rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
		h1 {
			font-size: 3rem;
		}
		h3 {
			font-size: 1.1rem;
		}
		.socials {
			font-size: 2.7rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		h1 {
			font-size: 3rem;
		}
		h3 {
			font-size: 1.2rem;
		}
		.socials {
			font-size: 2.5rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
		h1 {
			font-size: 4rem;
		}
		h3 {
			font-size: 1.4rem;
		}
		.socials {
			font-size: 2.7rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
		/* big landscape tablets, laptops, and desktops */
		h1 {
			font-size: 5rem;
		}
		h3 {
			font-size: 1.5rem;
		}
		.socials {
			font-size: 3rem;
		}
		.socials a {
			margin-left: 4%;
		}
	}
	@media only screen and (min-width: 1500px) {
		.socials {
			font-size: 3rem;
		}
		.socials a {
			margin-left: 7%;
		}
	}
`;

const AdrianAbout = () => {
	return (
		<MAboutPage>
			<div className="container">
				<h1>
					Take a Valk on
					<br />
					the <span className="gradient-text">Vild</span> Side
				</h1>
				<h3>
					From the Mind and hand of <br />
					Adrian van Der Valk
				</h3>

				<div className="images">
					<div className="subImages">
						<img className="subImg" src={subImg1} alt="pic1" />
						<img className="subImg" src={subImg2} alt="pic2" />
						<img className="subImg" src={subImg3} alt="pic3" />
					</div>
					<img className="heroImg" src={heroImg} alt="hero" />
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
