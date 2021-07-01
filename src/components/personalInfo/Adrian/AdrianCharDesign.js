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
	background: url(${cyanBack}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	color: #555555;

	/* * {
		border: 1px solid green;
	} */

	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 10%;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 5rem;
	}

	h1 {
		background-color: #f3ec78;
		padding-right: 10px;
		background-image: linear-gradient(85deg, #af4261, #f3ec78);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-size: 3rem;
	}

	.fancyFont {
		font-size: 10rem;
		font-family: 'Lobster', cursive, sans-serif;
		font-weight: 100;
	}

	p {
		width: 70%;
		margin: 5%;
		font-size: 1.8rem;
	}

	header p {
		width: 70ch;
		margin: 2rem 0 0;
		font-size: 0.9rem;
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
		margin-bottom: 15rem;
	}

	.artBoard {
		flex-direction: column;
		text-align: center;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.projPic {
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		border-radius: 50px;
		height: 100%;
	}

	.projPicMid {
		border-radius: 40px;
	}

	footer p {
		margin: 0;
		padding: 10rem 0 5rem;
		font-size: 1rem;
		text-align: right;
		width: 100%;
	}
`;

const MichaelProjects = () => {
	return (
		<ProjectsPage>
			<header>
				<h1>
					the<span className="fancyFont">Revelry</span>
				</h1>
				<div>
					<p>
						All artwork and content on this and related website
						pages are legally protected by U.S. & International
						copyright laws.
					</p>
					<p>
						Under NO circumstance is it permitted for you to use
						them for commercial purposes, without proper and prior
						permission from Adrian van der Valk, or his legal
						advisers.
					</p>
					<p>
						Unauthorized duplication or usage for commercial
						purposes is prohibited by the Copyright law and will be
						prosecuted. We protect our copyright interests.
					</p>
					<p>
						Adrian van der Valk retains all of the copyrights to all
						artwork on this site, regardless of having sold the
						legal advisors in order to use an image for commercial
						purposes, whether or not you now own the original
						artwork. Thank you.
					</p>
				</div>
			</header>
			<div className="gallery">
				<div className="projZone">
					<img className="projPic" src={pic_1} alt="pic 1" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Contributed to the design and implementation of a
							React app that gathers and shares family recipes.
							This app uses Redux to manage state, and makes axios
							calls to our concurrent team’s Node API.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Implemented a Redux state management system to our
							team’s React application. The app helped its users
							organize their time and efforts towards keeping
							their plants healthy and watered.
						</p>
					</div>
					<img className="projPic" src={pic_2} alt="pic 2" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_3} alt="pic 3" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Created a personal site for an up-and-coming local
							Los Angeles character artist. Designed layout and
							collaborated on background displays for each
							character.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Built a Restful CRUD API for a fitness class
							reservation application using Node.js and Express as
							well as used JWT authentication for login security,
							while a concurrent team built out the design and
							features for front end using React/Redux
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
							A current super-secret pic that’s in the works.
							Aspires to bring a new approach to the foreign
							language learning world. Don’t tell anyone....
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Collaborated on this small pic based on the classic
							card game, Old Maid. Contributions include asset
							design as well as functionality.
						</p>
					</div>
					<img className="projPic" src={pic_6} alt="pic 6" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_7} alt="pic 7" />
					<div className="info">
						<h3>Title</h3>
						<p>
							Created a personal site for an up-and-coming local
							Los Angeles character artist. Designed layout and
							collaborated on background displays for each
							character.
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Built a Restful CRUD API for a fitness class
							reservation application using Node.js and Express as
							well as used JWT authentication for login security,
							while a concurrent team built out the design and
							features for front end using React/Redux
						</p>
					</div>
					<img className="projPic" src={pic_8} alt="pic 8" />
				</div>
				<div className="projZone">
					<img className="projPic" src={pic_9} alt="pic 9" />
					<div className="info">
						<h3>Title</h3>
						<p>
							A current super-secret pic that’s in the works.
							Aspires to bring a new approach to the foreign
							language learning world. Don’t tell anyone....
						</p>
					</div>
				</div>
				<div className="projZone">
					<div className="info">
						<h3>Title</h3>
						<p>
							Built a Restful CRUD API for a fitness class
							reservation application using Node.js and Express as
							well as used JWT authentication for login security,
							while a concurrent team built out the design and
							features for front end using React/Redux
						</p>
					</div>
					<img className="projPic" src={pic_10} alt="pic 10" />
				</div>
				<footer>
					<p>
						Copyright ©2021 Adrian van der Valk. All Rights
						Reserved.
					</p>
				</footer>
			</div>
		</ProjectsPage>
	);
};

export default MichaelProjects;
