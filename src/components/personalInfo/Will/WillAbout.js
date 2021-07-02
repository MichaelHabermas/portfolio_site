import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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

	@media (max-width: 425px) {
	}
	@media (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media (min-width: 1281px) and (max-width: 1500px) {
	}
	@media (min-width: 1500px) {
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
							href="https://github.com/william-d-moon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/william-d-moon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>

						<a href="mailto:wmoon0113@gmail.com">
							<RiMailFill className="mailImg" />
						</a>
					</div>
				</footer>
			</div>
		</WAboutPage>
	);
};

export default WillAbout;
