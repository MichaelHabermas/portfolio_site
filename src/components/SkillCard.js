import React from "react";
import styled from "styled-components";

const SkillCardStyle = styled.div`
	.icon_card {
		width: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem 1rem 0 0;
		color: blue;
	}

	.iconTitle_card {
		text-align: center;
		font-size: 1.7rem;
		color: black;
	}

	@media screen and (min-width: 480px) {
	}
	@media screen and (min-width: 768px) {
		.icon_card {
			margin: 2rem 2rem 0 0;
		}
	}
	@media screen and (min-width: 1024px) {
		.icon_card {
			margin: 2rem 2rem 0 0;
		}
	}
	@media screen and (min-width: 1200px) {
		.icon_card {
			margin: 2rem 1rem 0 0;
		}
	}
	@media screen and (min-width: 1550px) {
	}
`;

const SkillCard = props => {
	const { component, iconName } = props;
	return (
		<SkillCardStyle>
			<div className="icon_card">
				<div className="iconImg_card">{component}</div>
				<h5 className="iconTitle_card">{iconName}</h5>
			</div>
		</SkillCardStyle>
	);
};

export default SkillCard;
