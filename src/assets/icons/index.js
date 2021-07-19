// to use icons: npm install react-icons --save
import React from "react";

import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaPython,
	FaNode,
	FaFigma,
	FaLinkedin,
	FaGithub,
	FaTwitterSquare,
	FaInstagram,
	FaFacebookSquare,
	FaGlobe,
} from "react-icons/fa";

// HTML5:              FaHtml5
// CSS3:               FaCss3Alt
// React:               FaReact
// Python:              FaPython
// NodeJS:              FaNode
// Figma:               FaFigma
// LinkedIn:                FaLinkedin
// GitHub:              FaGithub,
// Twitter:                 FaTwitterSquare
// Instagram:               FaInstagram
// Facebook:                FaFacebookSquare

import {
	SiJavascript,
	SiHeroku,
	SiAudacity,
	SiPostman,
	SiPostgresql,
} from "react-icons/si";
// Javascript:              SiJavascript
// Heroku:              SiHeroku
// Audacity:                SiAudacity
// Postman:                 SiPostman
// PostgreSQL:              SiPostgresql

import { RiMailFill, RiDownloadCloud2Line } from "react-icons/ri";
// email:               RiMailFill

// to use icons after importing <iconName className="className" />;

const iconComponent = {
	HTML5: { component: <FaHtml5 className="icon" />, iconName: "HTML5" },
	CSS3: { component: <FaCss3Alt className="icon" />, iconName: "CSS3" },
	Javascript: {
		component: <SiJavascript className="icon" />,
		iconName: "Javascript",
	},
	React: { component: <FaReact className="icon" />, iconName: "React" },
	NodeJS: { component: <FaNode className="icon" />, iconName: "NodeJS" },
	Python: { component: <FaPython className="icon" />, iconName: "Python" },
	GitHub: { component: <FaGithub className="icon" />, iconName: "GitHub" },
	Heroku: { component: <SiHeroku className="icon" />, iconName: "Heroku" },
	Postgresql: {
		component: <SiPostgresql className="icon" />,
		iconName: "Postgres",
	},
	Postman: { component: <SiPostman className="icon" />, iconName: "Postman" },
	Figma: { component: <FaFigma className="icon" />, iconName: "Figma" },
	Audacity: {
		component: <SiAudacity className="icon" />,
		iconName: "Audacity",
	},
	LinkedIn: {
		component: <FaLinkedin className="icon" />,
		iconName: "LinkedIn",
	},
	Twitter: {
		component: <FaTwitterSquare className="icon" />,
		iconName: "Twitter",
	},
	Instagram: {
		component: <FaInstagram className="icon" />,
		iconName: "Instagram",
	},
	Facebook: {
		component: <FaFacebookSquare className="icon" />,
		iconName: "Facebook",
	},
	Email: { component: <RiMailFill className="icon" />, iconName: "Email" },
	Web: { component: <FaGlobe className="icon" />, iconName: "Website" },
	CV: { component: <RiDownloadCloud2Line className="icon" />, iconName: "CV" },
};

export default iconComponent;
