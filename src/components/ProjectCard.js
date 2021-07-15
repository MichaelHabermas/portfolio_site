import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div`
	.project_card {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #c4c4c4;
		opacity: 0.3;
		border-radius: 20px;
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
	}

	img {
		width: 90%;
	}

	p {
		font-size: 3rem;
	}

	.project_icons {
	}
`;

const ProjectCard = props => {
	const { image, text, icons } = props;
	return (
		<ProjectCardStyle>
			<div className="project_card">
				<img src={image} alt="project image"></img>
				<p>{text}</p>
				<div className="project_icons">
					{icons.map(icon => {
						return (
							<>
								<h4>Hi</h4>
							</>
						);
					})}
				</div>
			</div>
		</ProjectCardStyle>
	);
};

export default ProjectCard;
