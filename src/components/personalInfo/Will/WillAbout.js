import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import mountainSideWide from '../../../assets/will_page/will_main_widescreen.svg';
import mountainSideMobile from '../../../assets/will_page/will_main_mobile.svg';
import mountainSideMobileLarge from '../../../assets/will_page/will_main_mobile_large.svg';
import mountainSideTablet from '../../../assets/will_page/will_main_tablet.svg';
import mountainSideDesktop from '../../../assets/will_page/will_main_desktop.svg';


const WAboutPage = styled.div`
background-image: url(${mountainSideMobile});
background-position: center center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: space-between;
height: 100vh;

* {
	transition: all 0.5s ease-in-out;
	/* border: 1px solid yellow; */
}

.mainAboutDiv {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-self: center;
	width: 80%;
	margin-top: 20%;
	transform: translateY(68%);
}

p,
h1 {
	color: black;
}

h1 {
	font-size: 2rem;
	text-align: left;
}

p {	
	margin-top: 28%;
	font-size: 1.1rem;
	width: 90%;
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.seeMore {
	font-size: 1.6rem;
	font-weight: bold;
	transform: translate(5%, -50%);
	color: white;
}

.socials {
	display: flex;
	justify-content: space-evenly;
	font-size: 2rem;
	width: 90%;
}

.socials a {
	color: white;
}

.socials a:hover {
	color: cyan;
	transition: all 0.3s;
}

.mailImg {
	margin-top: 1%;
	transform: scale(1.085, 1.16);
}

.linkImg {
	transform: scale(1.08, 1);
}

/*  --- MOBILE ---  */

@media (max-width: 450px) {

}

@media (min-width: 450px) {
	.mainAboutDiv {
		margin-top: 20%;
		transform: translateY(48%);
	}

	h1 {
		font-size: 2.3rem;
	}

	p {
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: 32%;
	}
	}

	@media (min-width: 500px) {
		background-image: url(${mountainSideMobileLarge});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;

		.mainAboutDiv {
			margin-top: 15%;
			transform: translateY(29%);
		}
	
		h1 {
			font-size: 2.3rem;
		}
	
		p {
			font-size: 1.3rem;
			font-weight: 500;
			margin-top: 35%;
		}
		}
	}

	@media (min-width: 600px) {
		background-image: url(${mountainSideTablet});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;

		.mainAboutDiv {
			transform: translateY(30%);
		}
	
		h1 {
			font-size: 3rem;
		}
	
		p {
			font-size: 1.7rem;
			margin-top: 10%;
		}
		
		footer {
			margin-bottom: 2%;
		}
		
		.seeMore {
			font-size: 1.9rem;
			margin-bottom: 2%;
		}
		
		.socials {
			font-size: 2.8rem;
		}
	}

	@media (min-width: 750px) {
		p {
			font-size: 2rem;
		}
		
		footer {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			width: 100%;
			transform: translateY(20%);
		}
	
		.seeMore {
			font-size: 2.3rem;
			font-weight: bold;
			transform: translate(10%, 0%);
		}

		.socials {
			display: flex;
			justify-content: space-evenly;
			font-size: 2.5rem;
			width: 40%;
			padding-left: 5%;
		}
	}

	@media (min-width: 900px) {
		.mainAboutDiv {
			margin-top: 20%;
			transform: translateY(25%);
		}
	
		h1 {
			font-size: 3.6rem;
		}
		
		.seeMore {
			font-size: 2.5rem;
		}
	}

	@media only screen and (min-width: 1000px) {
		background-image: url(${mountainSideDesktop});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;

		.mainAboutDiv {
			margin-top: 22%;
			transform: translateY(30%);
		}
	
		p {
			margin-top: 5%;
		}
	
		.seeMore {
			font-size: 2.6rem;
		}

		.socials {
			font-size: 3.4rem;
		}
	}

	@media only screen and (min-width: 1300px) {
		background-image: url(${mountainSideDesktop});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;

		.mainAboutDiv {
			margin-top: 14%;
			transform: translateY(25%);
		}
	
		p {
			margin-top: 8%;
		}
	
		.seeMore {
			font-size: 2.8rem;
			transform: translateX(-10%);
		}

		.socials {
			font-size: 3.8rem;
		}
	}

	@media only screen and (min-width: 1500px) {
		background-image: url(${mountainSideWide});
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;

		.mainAboutDiv {
			margin-top: 14%;
			transform: translateY(25%);
		}
	
		p {
			margin-top: 5%;
		}
	
		.seeMore {
			font-size: 2.8rem;
			transform: translateX(-15%);
		}

		.socials {
			font-size: 4rem;
		}
	}
`;

const WillAbout = () => {
	return (
		<WAboutPage>
				<div className='mainAboutDiv'>
					<h1>This is Will.</h1>
					<p>
						An enthusiastic software engineer, 
					</p>
				</div>
				<footer>
					<Link className="seeMore" to="/personal-info/Will/projects">
						See more...
					</Link>
					<div className="socials">
						<a
							href="https://github.com/william-d-moon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/william-d-moon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="linkImg" />
						</a>

						<a href="mailto:wmoon0113@gmail.com">
							<RiMailFill className="mailImg" />
						</a>
					</div>
				</footer>
		</WAboutPage>
	);
};

export default WillAbout;
