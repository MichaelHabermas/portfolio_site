import React from "react";
import styled from "styled-components";

// import components
import SkillCard from "./SkillCard";

const ProjectCardStyle = styled.div`
	.project_div {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(196, 196, 196, 0.3);
		border-radius: 30px;
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		margin-bottom: 3rem;
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
		display: flex;
	}

	.project_icon {
		font-size: 5rem;
	}

	.project_div:hover {
		transform: scale(1.005);
		box-shadow: 3px 3px 11px 10px rgba(255, 250, 226, 0.6);
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
		p {
			font-size: 1.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1200px) {
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1300px) {
		p {
			font-size: 1.7rem;
		}
	}
	@media screen and (min-width: 1400px) {
	}
	@media screen and (min-width: 1550px) {
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
