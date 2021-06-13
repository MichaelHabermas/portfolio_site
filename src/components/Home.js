import React from 'react';
import styled from 'styled-components';

import bg1 from '../assets/homePage/cBkgrnd4.png';
import landingPage from '../assets/homePage/landingPage.svg';
import landingPage2 from '../assets/homePage/landingPage2.svg';
// import girl1 from '../assets/girl1.png';
// import rock1 from '../assets/rock1.png';
import OldMaidImage from '../assets/homePage/OldMaidImage.png';
import SpeaqDisplay from '../assets/homePage/SpeaqDisplay.png';

const HomeDiv = styled.div`
	height: 300vh;
	width: 200%;
	/* background-color: #fcf5b8; */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* color: #fff; */
		font-family: 'Poppins', sans-serif;
		z-index: -1;
		/* background-color: #fcf5b8; */
	}

	.background-image {
		/* background-position: center / cover; */
		/* background-repeat: no-repeat; */

		/* margin-top: -5%; */
		width: 100vw;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.landingP {
		width: 100%;
		/* margin: 0 auto; */
		/* z-index: -1; */
	}
	/* .container {
		height: 100vh;
		margin: 0;
		object-fit: center / cover;
	} */

	.container img {
		width: 100%;
		/* position: absolute; */
		/* height: 70vh; */
		object-fit: cover;
		/* z-index: -1; */
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
				{/* <img className="landingP" src={landingPage2} alt="background" /> */}
				{/* <img src="small.jpg" srcset="medium.jpg 1000w, large.jpg 2000w" alt="yah"> */}
				{/* <img src="small.jpg" srcset=`${landingPage2}1000w, ${landingPage1}1000w` alt="yah"></img> */}
				<img className="landingP" src={landingPage2} alt="background" />
				{/* <picture>
  <source media="(max-width: 799px)" srcSet="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcSet="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture> */}
				{/* <div className="container"> */}
				<h1 className="main-title">
					Hi!
					<br />
					We're Programmers
				</h1>
				{/* </div> */}

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
