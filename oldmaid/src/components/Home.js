import React from 'react';
import styled from 'styled-components';

import bg1 from '../assets/homePage/cBkgrnd4.png';
// import girl1 from '../assets/girl1.png';
// import rock1 from '../assets/rock1.png';
import OldMaidImage from '../assets/homePage/OldMaidImage.png';
import SpeaqDisplay from '../assets/homePage/SpeaqDisplay.png';

const HomeDiv = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* color: #fff; */
		font-family: 'Poppins', sans-serif;
	}

	nav {
		position: absolute;
		width: 100%;
		display: flex;
		padding: 3rem 10rem;
		justify-content: space-between;
	}

	.container {
		height: 70vh;
		margin: 5% 0 0 0;
	}

	.container img {
		width: 100%;
		/* position: absolute; */
		/* height: 70vh; */
		object-fit: cover;
		/* z-index: -1; */
	}

	.main-title {
		position: absolute;
		top: 45%;
		left: 50%;
		font-size: 4rem;
		transform: translate(-50%, -50%);
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
			<div className="container">
				<h1 className="main-title">Welcome to the Show</h1>
				<img src={bg1} className="bg1" alt="background" />
				{/* <img src={girl1} className="girl" alt="" />
				<img src={rock1} className="rock" alt="" /> */}
			</div>
			<div className="content">
				<div className="content-images">
					<a href="/old-maid/startscreen" alt="Old Maid">
						<img className="content-image" src={OldMaidImage} alt="Old Maid" />
						<h4>Old Maid</h4>
						<h3>Pick a card...</h3>
					</a>
					<div>
						<img className="content-image" src={SpeaqDisplay} alt="Speaq" />
						<h4>COMING SOON</h4>
						<h3>A New Way to Learn Languages</h3>
					</div>
				</div>
				<p className="text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque consequuntur a nisi, illo
					quia cupiditate fuga et eos minima voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
					quae.
				</p>
				<p className="text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque consequuntur a nisi, illo
					quia cupiditate fuga et eos minima voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
					quae.
				</p>
			</div>
		</HomeDiv>
	);
}
