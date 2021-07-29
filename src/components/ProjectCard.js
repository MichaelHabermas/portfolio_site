import React from "react";
import styled from "styled-components";

// import components
import SkillCard from "./SkillCard";

const ProjectCardStyle = styled.div`
	.project_div {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
		background: rgba(196, 196, 196, 0.3);
		border-radius: 30px;
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		margin-bottom: 1rem;
		transition: all 0.2s ease-in-out;
	}

	img {
		width: 100%;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: 500;
		width: 90%;
		color: #444444;
	}

	.project_icons {
		/* margin-top: 2%;
		padding-top: 3%; */
		display: flex;
	}

	.project_icon {
		/* transition: all 2s ease-in-out; */
	}

	.project_div:hover {
		transform: scale(1.005);
		box-shadow: 3px 3px 11px 10px rgba(255, 250, 226, 0.6);
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
		.project_div {
			/* min-height: 450px; */
		}

		img {
			/* width: 100%; */
			/* margin-bottom: 5%; */
			/* max-width: 400px; */
			/* max-height: 200px; */
		}

		p {
			font-size: 1.6rem;
			/* width: 90%; */
			/* max-height: 110px; */
		}
	}
	@media screen and (min-width: 1024px) {
		.project_div {
			/* max-height: 500px; */
		}
		img {
			/* width: 100%; */
			/* margin-bottom: 5%; */
			/* max-width: 400px;
			max-height: 220px; */
		}
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.project_div {
			/* max-width: 450px; */
		}
		img {
			/* width: 100%; */
			/* margin-bottom: 5%; */
			/* max-width: 430px;
			max-height: 220px; */
		}
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1300px) {
		.project_div {
			/* max-width: 350px; */
		}
		img {
			/* width: 100%; */
			/* margin-bottom: 5%; */
			/* max-width: 400px;
			max-height: 170px; */
		}
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1400px) {
		.project_div {
			/* max-width: 400px; */
		}
	}
	@media screen and (min-width: 1550px) {
		.project_div {
			/* max-width: 500px; */
		}
	}
`;

const ProjectCard = props => {
	const { image, text, icons } = props;
	return (
		<ProjectCardStyle>
			<div className="project_div">
				<img src={image} alt="project_image"></img>
				<p>{text}</p>
				<div className="project_icons">
					{icons.map(iconX => {
						return (
							<a
								href={iconX["location"]}
								target="_blank"
								rel="noreferrer"
								key={Math.random()}
								className="project_icon"
							>
								<SkillCard
									className="project_icon"
									component={iconX["component"]}
								/>
							</a>
						);
					})}
				</div>
			</div>
		</ProjectCardStyle>
	);
};

export default ProjectCard;
