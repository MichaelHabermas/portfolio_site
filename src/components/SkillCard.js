import React from "react";
import styled from "styled-components";

// import { iconComponent } from "../assets/icons";

const SkillCardStyle = styled.div`
	.icon_card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 1rem 1rem 0;
		/* border: 1px solid black; */
	}

	/* .iconImg_card {
		width: 5rem;
		height: 5rem;
	} */

	.iconTitle_card {
		/* width: 90%; */
		text-align: center;
		font-size: 2rem;
		color: black;
	}
`;

const SkillCard = props => {
	const { iconImg, iconName } = props;
	return (
		<SkillCardStyle>
			<div className="icon_card">
				<div className="iconImg_card">{iconImg}</div>
				<h5 className="iconTitle_card">{iconName}</h5>
			</div>
		</SkillCardStyle>
	);
};

export default SkillCard;
