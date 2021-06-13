import React from 'react';
import styled from 'styled-components';

// import landingPage from '../assets/homePage/landingPage.svg';
import landingPage2 from '../assets/homePage/landingPage2.svg';

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

	.main-title,
	h1 {
		position: absolute;
		top: 30%;
		left: 50%;
		font-size: 6rem;
		transform: translate(-50%, -50%);
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
`;

export default function Home() {
	return (
		<HomeDiv>
			<div className="background-image">
				<img className="landingP" src={landingPage2} alt="background" />
				<h1 className="main-title">
					Hi!
					<br />
					We're Programmers
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
					<p className="text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facere neque consequuntur a nisi, illo quia
						cupiditate fuga et eos minima voluptatum cum dolorum
						quas repellat eaque beatae vitae veritatis quae.
					</p>
					<p className="text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facere neque consequuntur a nisi, illo quia
						cupiditate fuga et eos minima voluptatum cum dolorum
						quas repellat eaque beatae vitae veritatis quae.
					</p>
				</div>
			</div>
		</HomeDiv>
	);
}
