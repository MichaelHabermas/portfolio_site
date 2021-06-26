import React from 'react';
import styled from 'styled-components';

// import landingPage from '../assets/homePage/landingPage.svg';
import landingPage2 from '../assets/homePage/landingPage2.svg';
import landingPage3 from '../assets/homePage/landingPage3.svg';

import OldMaidImage from '../assets/homePage/OldMaidImage.png';
import SpeaqDisplay from '../assets/homePage/SpeaqDisplay.png';

const HomeDiv = styled.div`
	height: 300vh;
	width: 200%;
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		z-index: -1;
	}

	.background-image {
		width: 100vw;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.landingP {
		width: 100%;
	}

	.container img {
		width: 100%;
		object-fit: cover;
	}

	.main-title {
		position: absolute;
		top: 30%;
		left: 50%;
		font-size: 6rem;
		transform: translate(-100%, -50%);
		font-family: 'scriptina', 'Poppins', sans-serif;
		color: white;
		z-index: 12;
		text-align: center;
		line-height: 2.5ch;
	}

	.content {
		width: 100%;
		min-height: 100vh;
		z-index: 2;
		position: absolute;
	}

	.content-images {
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-height: 60vh;
		text-align: center;
	}

	.content-image {
		width: 40rem;
		padding: 10px;
		height: 22rem;
		border-radius: 40px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
		object-fit: center / cover;
	}

	.text {
		padding: 2rem 20rem;
		font-size: 1.1rem;
	}

	.word {
		display: inline-block;
	}
	.word span {
		padding: 0 50px 80px 0;
		font-family: 'scriptina', 'Poppins', sans-serif;
		position: absolute;
		top: 0;
		overflow: hidden;
		animation: animate 8s linear infinite;
		opacity: 0;
	}

	@keyframes animate {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}
		2% {
			opacity: 1;
			transform: translateY(0px);
		}
		18% {
			opacity: 1;
			transform: translateY(0px);
		}
		20% {
			opacity: 0;
			transform: translateY(50px);
		}
		100% {
			opacity: 0;
			transform: translateY(50px);
		}
	}

	.word span:nth-child(1) {
		animation-delay: 0s;
	}
	.word span:nth-child(2) {
		animation-delay: 2s;
	}
	.word span:nth-child(3) {
		animation-delay: 4s;
	}
	.word span:nth-child(4) {
		animation-delay: 6s;
	}

	@media screen and (max-width: 1600px) {
		.main-title,
		h1 {
			font-size: 4rem;
			top: 20%;
		}
	}

	@media screen and (max-width: 1200px) {
		.main-title,
		h1 {
			font-size: 3.5rem;
			top: 15%;
		}
	}

	@media screen and (max-width: 800px) {
		.main-title,
		h1 {
			font-size: 2rem;
			top: 10%;
		}
	}

	@media screen and (max-width: 600px) {
		.main-title,
		h1 {
			font-size: 1.5rem;
			top: 20%;
		}
	}
`;

export default function Home() {
	return (
		<HomeDiv>
			<div className="background-image">
				<img
					className="landingP"
					src={
						window.screen.width > 600 ? landingPage2 : landingPage3
					}
					alt="background"
				/>

				<h1 className="main-title">
					Hi! We're
					<div className="word">
						<span> Programmers</span>
						<span> Designers</span>
						<span> Artists</span>
						<span> You're New Best Friends</span>
					</div>
				</h1>

				<div className="content">
					<div className="content-images">
						<a href="/old-maid/startscreen" alt="Old Maid">
							<img
								className="content-image"
								src={OldMaidImage}
								alt="Old Maid"
							/>
							<h4>Old Maid</h4>
							<h3>Pick a card...</h3>
						</a>
						<div>
							<img
								className="content-image"
								src={SpeaqDisplay}
								alt="Speaq"
							/>
							<h4>COMING SOON</h4>
							<h3>A New Way to Learn Languages</h3>
						</div>
					</div>
				</div>
			</div>
		</HomeDiv>
	);
}
