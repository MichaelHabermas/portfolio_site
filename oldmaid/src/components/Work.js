import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

// images
import bg1 from '../assets/bg1.png';
import girl1 from '../assets/girl1.png';
import rock1 from '../assets/rock1.png';
// import switzleft from '../assets/switzleft.png';
// import switzright from '../assets/switzright.png';

const image1 =
	'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
const image2 =
	'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001';
const image3 = 'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg';
const image4 =
	'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg';

const WorkDiv = styled.div`
	.container {
		height: 100vh;
	}

	.main {
		color: white;
		width: 100vw;
		/* position: absolute; */
		/* height: 110vh; */
		/* object-fit: center / cover; */
		/* z-index: -1; */
	}
	.container img {
		width: 100%;
		/* position: absolute; */
		/* height: 110vh; */
		object-fit: cover;
		/* z-index: -1; */
	}
	.main-title {
		position: absolute;
		top: 30%;
		left: 50%;
		font-size: 4rem;
		transform: translate(-50%, -30%);
	}

	.content {
		width: 100%;
		background: rgb(24, 24, 24);
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

	.text {
		padding: 2rem 20rem;
		font-size: 1.1rem;
	}
	.rock {
		z-index: 11;
		position: relative;
		top: 0;
	}
`;

const inlineStyle = {
	// background: '#fff',
	color: 'white',
	fontSize: '4rem',
	left: '50%',
	top: '50%',
	position: 'absolute',
	padding: '20px',
	transform: 'translate(-50%, -50%)'
};

export default function Work() {
	return (
		<>
			<WorkDiv>
				<Parallax className="main" bgImage={bg1} strength={800}>
					{/* <Parallax> */}
					<div className="container">
						<h2 className="main-title">Welcome to the Show</h2>
						{/* <Parallax strength={400}> */}
						{/* <div className="container2"> */}
						{/* <img src={bg1} className="bg1" alt="" /> */}
						<img src={girl1} className="girl" alt="" />
						<img src={rock1} className="rock" alt="" />
						{/* </div> */}
						{/* </Parallax> */}
					</div>
				</Parallax>
			</WorkDiv>

			<div style={{ textAlign: 'center' }}>
				<Parallax bgImage={image1} strength={500}>
					<div style={{ height: 500 }}>
						<h1 style={inlineStyle}>HTML inside the parallax</h1>
					</div>
				</Parallax>
				<h1>| | |</h1>
				<Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
					<div style={{ height: 500 }}>
						<div style={inlineStyle}>Dynamic blur</div>
					</div>
				</Parallax>
				<h1>| | |</h1>
				<Parallax bgImage={image3} strength={-200}>
					<div style={{ height: 500 }}>
						<div style={inlineStyle}>Reverse direction</div>
					</div>
				</Parallax>
				<h1>| | |</h1>
				<Parallax
					bgImage={image4}
					strength={200}
					renderLayer={percentage => (
						<div
							style={{
								position: 'absolute',
								width: '100px',
								height: '100px',
								borderRadius: '50%',
								background: `rgba(255, 123, 23, ${percentage * 1})`,
								left: '50%',
								top: '50%',
								transform: `translate(-50%, -50%) scale(${percentage * 5})`
							}}
						></div>
					)}
				>
					<div style={{ height: 500 }}>
						<div style={inlineStyle}>Render prop</div>
					</div>
				</Parallax>
				<div style={{ height: '100vh' }}></div>
			</div>
		</>
	);
}
