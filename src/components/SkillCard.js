import React from "react";
import styled from "styled-components";

const SkillCardStyle = styled.div`
	.icon_card {
		width: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.iconTitle_card {
		text-align: center;
		font-size: 1.7rem;
		color: black;
	}

	@media screen and (min-width: 480px) {
		color: blue;
	}
	@media screen and (min-width: 768px) {
		.icon_card {
			width: 6.1rem;
		}

		.iconTitle_card {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.icon_card {
			width: 7.4rem;
		}

		.iconTitle_card {
			font-size: 1.5rem;
		}
	}
	@media screen and (min-width: 1200px) {
		color: red;
	}
	@media screen and (min-width: 1550px) {
		color: blue;
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
