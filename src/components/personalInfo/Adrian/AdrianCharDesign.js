import React from 'react';
import styled from 'styled-components';

import cyanBack from '../../../assets/michaelPage/RectangleCyan.svg';
import pic_1 from '../../../assets/adrianPage/char_design_pics/night_druid.png';
import pic_2 from '../../../assets/adrianPage/char_design_pics/shoulder_jacket.png';
import pic_3 from '../../../assets/adrianPage/char_design_pics/glasses_rainbow.png';
import pic_4 from '../../../assets/adrianPage/char_design_pics/earphones.png';
import pic_5 from '../../../assets/adrianPage/char_design_pics/breakfast_club.png';
import pic_6 from '../../../assets/adrianPage/char_design_pics/bridget_t.png';
import pic_7 from '../../../assets/adrianPage/char_design_pics/castlevania.png';
import pic_8 from '../../../assets/adrianPage/char_design_pics/tief_rogue.png';
import pic_9 from '../../../assets/adrianPage/char_design_pics/high_socks.png';
import pic_10 from '../../../assets/adrianPage/char_design_pics/hair_pocket.png';

const ProjectsPage = styled.div`
	/* background: url() no-repeat center center fixed; */
	background-image: url(${cyanBack});
	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	/* position: fixed;
	inset: 0rem; */

	height: 100%;

	overflow: hidden;
	overscroll-behavior: none;
	/* -webkit-overflow-scrolling: touch; */

	color: #555555;

	/* * {
		border: 1px solid green;
	} */

	header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-top: 7%;
		width: 90%;
		/* margin: 0 auto; */
		/* padding-right: 3rem; */
		margin-bottom: -5rem;
	}

	h1 {
		background-color: #f3ec78;
		background-image: linear-gradient(135deg, #af4261, #f3ec78);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-size: 3rem;
	}

	.fancyFont {
		font-size: 13rem;
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 100;
	}

	p {
		width: 70%;
		font-size: 1.8rem;
	}

	.gallery {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
	}

	.projZone {
		display: flex;
		align-items: center;
		height: 40rem;
		margin-bottom: -5rem;
	}

	.pzMid {
		flex-direction: column;
		margin-top: 10rem;
		margin-bottom: 10rem;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.info h3 {
		width: 70%;
		font-size: 3rem;
		text-align: left;
		margin-bottom: 1rem;
	}

	.projPic {
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		border-radius: 50px;
		height: 100%;
	}

	.projPicMid {
		border-radius: 40px;
		margin-bottom: 2rem;
	}

	footer {
		margin: 0 auto;
		padding: 10rem 0 5rem;
		width: 70%;
	}
	footer p {
		margin: 0 auto;
		font-size: 0.8rem;
		text-align: center;
	}

	// MEDIA QUERIES
	@media only screen and (max-width: 425px) {
	}
	@media only screen and (min-width: 425px) and (max-width: 641px) {
		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}
	@media only screen and (min-width: 641px) and (max-width: 961px) {
		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}
	@media only screen and (min-width: 961px) and (max-width: 1100px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
	@media only screen and (min-width: 1100px) and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
	}
	@media only screen and (min-width: 1281px) and (max-width: 1500px) {
	}
	@media only screen and (min-width: 1500px) {
	}

	@media only screen and (max-width: 1281px) {
		/* big landscape tablets, laptops, and desktops */
		header {
			padding-top: 10%;
		}

		h1 {
			font-size: 2rem;
		}

		.fancyFont {
			font-size: 6rem;
		}
		p {
			/* width: 80%; */
			font-size: 1rem;
		}
		.projZone {
			height: 30rem;
			/* margin-bottom: -5rem; */
		}
		.info h3 {
			/* width: 70%; */
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 1500px) {
		.fancyFont {
			font-size: 8rem;
		}
	}
	@media only screen and (min-width: 1500px) {
	}
`;

const MichaelProjects = () => {
	return (
		<ProjectsPage>
			<header>
				<h1>
					the<span className="fancyFont">Revelry</span>
				</h1>
			</header>
			<div className="gallery">
				<div className="projZone">
					<img className="projPic" src={pic_1} alt="pic 1" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
					<img className="projPic" src={pic_2} alt="pic 2" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_3} alt="pic 3" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
					<img className="projPic" src={pic_4} alt="pic 4" />
				</div>
				<div className="projZone pzMid">
					<img
						className="projPic projPicMid"
						src={pic_5}
						alt="pic 5"
					/>
					<div className="info">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
					<img className="projPic" src={pic_6} alt="pic 6" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_7} alt="pic 7" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
					<img className="projPic" src={pic_8} alt="pic 8" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_9} alt="pic 9" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In accumsan porttitor est ac vehicula.
							Pellentesque at nisi vitae sem viverra dapibus nec
							ut enim. Vivamus vitae dignissim est, at hendrerit
							augue.
						</p>
					</div>
					<img className="projPic" src={pic_10} alt="pic 10" />
				</div>
				<footer>
					<p>
						Copyright ©2021 Adrian van der Valk. All Rights
						Reserved.{' '}
					</p>
					<p>
						All artwork and content on this and related website
						pages are legally protected by U.S. & International
						copyright laws. Under NO circumstance is it permitted
						for anyone to use them for commercial purposes, without
						proper, express, and prior permission from Adrian van
						der Valk, or his legal advisers. Unauthorized
						duplication or usage for commercial purposes is
						prohibited by the Copyright law. Adrian van der Valk
						retains all of the copyrights to all artwork on this
						site, regardless of having sold the original image. You
						must contact him or his legal advisors in order to use
						an image for commercial purposes, whether or not you now
						own the original artwork.
					</p>
				</footer>
			</div>
		</ProjectsPage>
	);
};

export default MichaelProjects;
