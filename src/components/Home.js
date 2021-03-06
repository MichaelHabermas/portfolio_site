import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import landingPageWide from "../assets/homePage/landing_page_widescreen.png";
import landingPageDesktop from "../assets/homePage/landing_page_desktop.png";
import landingPageTablet from "../assets/homePage/landing_page_tablet.png";
import landingPageMobile from "../assets/homePage/landing_page_mobile.png";

const HomeDiv = styled.div`
	background-image: url(${landingPageMobile});
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
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Poppins", sans-serif;
		/* z-index: -1; */
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
		font-family: "Stalemate", cursive;
		color: white;
		font-size: 10rem;
		font-weight: 100;
		line-height: 1;
		z-index: 3;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-100%, -50%);
		padding-top: 0.5%;
	}

	.word {
		display: inline-block;
	}
	.word span {
		font-family: "Stalemate", cursive;
		position: absolute;
		top: 0;
		overflow: hidden;
		animation: animate 6s linear infinite;
		opacity: 0;
		padding: 6%;
		font-size: 10rem;
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
	.nameLinks {
		line-height: 1;
		z-index: 3;
		position: absolute;
		top: 55%;
		left: 48%;
		transform: translate(-50%, -50%);
		padding-top: 1%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 67%;
	}

	.nameLinks div {
		font-size: 6rem;
	}

	.nameLink {
		font-family: "Stalemate", cursive;
		color: white;
	}

	.nameLink2 {
		transform: translate(0%, -60%);
	}

	/* MEDIA QUERIES */
	@media only screen and (max-width: 480px) {
		background-image: url(${landingPageMobile});

		.main-title,
		.word span {
			font-size: 5rem;
		}
		.nameLinks {
			top: initial;
			left: 45%;
			bottom: 10%;
		}

		.nameLink2 {
			transform: translate(0%, -150%);
		}
	}
	@media only screen and (min-width: 426px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
		/* background: url(${landingPageTablet}) no-repeat center center fixed; */

		.main-title,
		.word span {
			font-size: 5rem;
		}
		.nameLinks div {
			font-size: 6rem;
		}
		.nameLink2 {
			transform: translate(0%, -150%);
		}
	}
	@media only screen and (min-width: 641px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
		background: url(${landingPageDesktop}) no-repeat center center fixed;

		.main-title {
			padding-top: 0.7%;
		}

		.main-title,
		.word span {
			font-size: 5rem;
		}
		.nameLinks div {
			font-size: 4rem;
		}
		.nameLink2 {
			transform: translate(0%, -100%);
		}
	}
	@media only screen and (min-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		background: url(${landingPageDesktop}) no-repeat center center fixed;
		.main-title,
		.word span {
			font-size: 6rem;
		}
		.nameLinks {
			font-size: 4rem;
			width: 55%;
		}
		.nameLink2 {
			transform: translate(0%, -60%);
		}
	}
	@media only screen and (min-width: 1025px) {
		/* big landscape tablets, laptops, and desktops */
		background: url(${landingPageDesktop}) no-repeat center center fixed;
		.main-title,
		.word span {
			font-size: 6rem;
		}
		.nameLinks {
			font-size: 5rem;
			width: 55%;
		}
	}
	@media only screen and (min-width: 1281px) {
		background: url(${landingPageWide}) no-repeat center center fixed;
		.main-title,
		.word span {
			font-size: 8rem;
		}
		.nameLinks {
			width: 70%;
		}
	}

	//	MEDIA QUERIES										                                         MEDIA Q's

	// this is attempt to fix the iphone landscape issues. NEEDS WORK
	@media all and (orientation: landscape) {
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1200px) {
	}
	@media screen and (min-width: 1550px) {
	}
`;

export default function Home() {
	return (
		<HomeDiv>
			<h1 className="main-title">
				Hi! We're
				<div className="word">
					<span> Programmers</span>
					<span> Designers</span>
					<span> Artists</span>
					{/* <span className="lastspan">...Your New Best Friends</span> */}
				</div>
			</h1>
			<div className="nameLinks">
				<Link to="/personal-info/michael/">
					<div className="nameLink nameLink1">Michael</div>
				</Link>
				<Link className="nameLink" to="/personal-info/adrian/">
					<div className="nameLink nameLink2">Adrian</div>
				</Link>
				<Link className="nameLink" to="/personal-info/will/">
					<div className="nameLink nameLink3">Will</div>
				</Link>
			</div>
		</HomeDiv>
	);
}
