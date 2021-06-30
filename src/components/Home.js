import React from 'react';
import styled from 'styled-components';

import landingPageWide from '../assets/homePage/landing_page_widescreen.svg';

const HomeDiv = styled.div`
	background: url(${landingPageWide}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height: 100vh;

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

	.main-title {
		font-family: 'Stalemate', cursive;
		color: white;
		font-size: 8rem;
		font-weight: 100;
		line-height: 1;
		z-index: 3;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-100%, -50%);
		padding-top: 1%;
	}

	.word {
		display: inline-block;
	}
	.word span {
		font-family: 'Stalemate', cursive;
		position: absolute;
		top: 0;
		overflow: hidden;
		animation: animate 8s linear infinite;
		opacity: 0;
		padding: 7% 80px 80px 20px;
	}

	.lastspan {
		width: 200%;
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
			{/* <div className="background-image">
				<img
					className="landingP"
					src={
						window.screen.width > 600 ? landingPage4 : landingPage3
					}
					alt="background"
				/> */}

			<h1 className="main-title">
				Hi! We're
				<div className="word">
					<span> Programmers</span>
					<span> Designers</span>
					<span> Artists</span>
					<span className="lastspan">...Your New Best Friends</span>
				</div>
			</h1>
			{/* </div> */}
		</HomeDiv>
	);
}
