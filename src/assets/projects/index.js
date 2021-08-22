import recipeazyImg from "../michaelPage/recipeazy_landing.png";
import waterPlantsImg from "../michaelPage/water_plants_landing.png";
import adrianLandingImg from "../michaelPage/adrian_landing.png";
import workoutImg from "../michaelPage/workout_landing.png";
import speaqImg from "../michaelPage/speaq_screens.png";
import oldmaidImg from "../michaelPage/old_maid_gameplay.png";
import conceptImgs from "../michaelPage/concept_art_collection.png";
// import potluck01 from "../will_page/Potluck_01.svg";
// import potluck02 from "../will_page/Potluck_02.svg";
// import techshop from "../will_page/Tech_Shop.svg";
// import firepic from "../firepic.svg";

import iconComponent from "../icons/index";

export const michaelsProjects = [
	{
		image: adrianLandingImg,
		text: "Designed and built a portfolio website for an independent Los Angeles digital artist. Assisted in the creating the presentational elements to properly highlight the artist's works. Utilizes HTML, CSS, React and Figma.",
		icons: [
			{
				iconName: "Web",
				location:
					"https://portfolio-site-peach.vercel.app/personal-info/adrian",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/MichaelHabermas/portfolio_site",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: recipeazyImg,
		text: "Contributed to the design and implementation of a front-end web app that gathers and shares family recipes. Utilizes HTML, CSS, JS, React, Redux, and axios to communicate with our concurrent team’s Node API.",
		icons: [
			{
				iconName: "Web",
				location: "https://secret-recipes-gold.vercel.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/secretFamiltRecipiesCookbook/frontEnd",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: waterPlantsImg,
		text: "A web app that helped its users organize their time and efforts towards keeping their plants healthy and watered. Implemented a Redux state management system to our team’s React application.",
		icons: [
			{
				iconName: "Web",
				location: "https://water-my-plants-ft4.netlify.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/ft-water-my-plants-4/FrontEnd",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},

	{
		image: workoutImg,
		text: "Built a Restful CRUD API for a fitness class reservation application for a concurrent team's built front end design.  Utilized Node.js, Express, Github, knex, PostgreSQL, JWTs.",
		icons: [
			{
				iconName: "Web",
				location: "https://angry-lewin-b72efc.netlify.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/ft-anywhere-fitness-05/back_end",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: speaqImg,
		text: "A current SUPER-secret project that’s in the works. Aspires to bring a new approach to the foreign language learning world. Application currently utilizes AWS Polly, Unity, Figma, Test Fairy. Don’t tell anyone....",
		icons: [
			{
				iconName: "Web",
				location: "",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: oldmaidImg,
		text: "Collaborated on the conception, design, and implementation of the classic card game, Old Maid. Contributions include some asset design and layout as well as functionality. Built using React, Redux, and Figma.",
		icons: [
			{
				iconName: "Web",
				location:
					"https://portfolio-site-peach.vercel.app/old-maid/startscreen",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location:
					"https://github.com/MichaelHabermas/portfolio_site/tree/main/src/components/OldMaid",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: conceptImgs,
		text: "A collection of art recreated in the conceptual style. Each individual piece composed completely in Figma",
		icons: [
			{
				iconName: "Web",
				location: "",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
];

export const willsProjects = [ // need to fix the links. doesn't work from the comp here
	{
		// image: adrianLandingImg,
		text: "Designed and built a portfolio website for an independent Los Angeles digital artist. Assisted in the creating the presentational elements to properly highlight the artist's works. Utilizes HTML, CSS, React and Figma.",
		icons: [
			{
				iconName: "Web",
				location:
					"https://portfolio-site-peach.vercel.app/personal-info/adrian",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/MichaelHabermas/portfolio_site",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		// image: potluck02, //potluck 05 need to change name and text
		text: "",
		icons: [
			{
				iconName: "Web",
				location: "https://potluck-landing.netlify.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/ft-potluck-planer-05-units3-4",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		// image: potluck01, //potluck 1.0 need to update title and text
		text: "",
		icons: [
			{
				iconName: "Web",
				location: "https://front-end-tau-teal.vercel.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/Build-Week-Potluck-Planner-5",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},

	{
		// image: techshop, // techstuff need to update txt and image of all
		text: "",
		icons: [
			{
				iconName: "Web",
				location: "https://front-end-one-ashen.vercel.app/",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "https://github.com/tt-44-use-my-tech-stuff",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		// image: firepic,
		text: "",
		icons: [
			{
				iconName: "Web",
				location: "",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location: "",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
	{
		image: oldmaidImg,
		text: "Collaborated on the conception, design, and implementation of the classic card game, Old Maid. Contributions include some asset design and layout as well as functionality. Built using React, Redux, and Figma.",
		icons: [
			{
				iconName: "Web",
				location:
					"https://portfolio-site-peach.vercel.app/old-maid/startscreen",
				component: iconComponent["Web"]["component"],
			},
			{
				iconName: "GitHub",
				location:
					"https://github.com/MichaelHabermas/portfolio_site/tree/main/src/components/OldMaid",
				component: iconComponent["GitHub"]["component"],
			},
		],
	},
];
