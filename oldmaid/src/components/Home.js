import React from 'react';
import { Parallax } from 'react-parallax'; // TimelineMax

import { ScrollMagic } from 'react-scroll-parallax'; // TimelineMax
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { TweenMax } from 'gsap';

import styled from 'styled-components';

import bg1 from '../assets/bg1.png';
import girl1 from '../assets/girl1.png';
import rock1 from '../assets/rock1.png';
import switzleft from '../assets/switzleft.png';
import switzright from '../assets/switzright.png';

const HomeDiv = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: #fff;
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
		height: 100vh;
	}
	.container img {
		width: 100%;
		position: absolute;
		height: 110vh;
		object-fit: cover;
		z-index: -1;
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
`;

// #########        SCRIPTS
//  <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
//       integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ=="
//       crossorigin="anonymous"
//     ></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.js"></script>
//     <script src="./script.js"></script>

// #########        JAVASCRIPT
// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// let timeline = new TweenMax();
// timeline
// 	.to('.rock', 10, { y: -300 })
// 	.to('.girl', 10, { y: -200 }, '-=10')
// 	.fromTo('.bg1', { y: -50 }, { y: 0, duration: 10 }, '-=10')
// 	.to('.content', 10, { top: '0%' }, '-=10')
// 	.fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3 })
// 	.fromTo('.text', { opacity: 0 }, { opacity: 1, duration: 3 });

// let scene = new ScrollMagic.Scene({
// triggerElement: 'section',
// duration: '300%',
// triggerHook: 0
// });
// scene.setTween(timeline).setPin('section').addTo(controller);

export default function Home() {
	return (
		// <Controller>
		// 	<Scene pin={'section'} setTween={timeline} triggerElement="section" duration="300%" triggerHook="0">
		// 		<Tween staggerFrom={{ value: 0, ease: 'Expo.easeOut' }} staggerTo={{ value: 90 }}>
		<HomeDiv>
			<div className="container">
				<h2 className="main-title">Welcome to the Show</h2>
				<img src={bg1} className="bg1" alt="" />
				<img src={girl1} className="girl" alt="" />
				<img src={rock1} className="rock" alt="" />
			</div>
			<div className="content">
				<div className="content-images">
					<div>
						<img src={switzleft} alt="" />
						<h4>Switzerland</h4>
						<h3>Mountains of tibidabo</h3>
					</div>
					<div>
						<img src={switzright} alt="" />
						<h4>Switzerland</h4>
						<h3>Mountains of tibidabo</h3>
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
		// 		</Tween>
		// 	</Scene>
		// </Controller>
	);
}
