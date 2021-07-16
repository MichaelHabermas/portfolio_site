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
	HTML5: [<FaHtml5 className="icon" />, "HTML5"],
	CSS3: [<FaCss3Alt className="icon" />, "CSS3"],
	Javascript: [<SiJavascript className="icon" />, "Javascript"],
	React: [<FaReact className="icon" />, "React"],
	NodeJS: [<FaNode className="icon" />, "NodeJS"],
	Python: [<FaPython className="icon" />, "Python"],
	GitHub: [<FaGithub className="icon" />, "GitHub"],
	Heroku: [<SiHeroku className="icon" />, "Heroku"],
	Postgresql: [<SiPostgresql className="icon" />, "Postgres"],
	Postman: [<SiPostman className="icon" />, "Postman"],
	Figma: [<FaFigma className="icon" />, "Figma"],
	Audacity: [<SiAudacity className="icon" />, "Audacity"],
	LinkedIn: [<FaLinkedin className="icon" />, "LinkedIn"],
	Twitter: [<FaTwitterSquare className="icon" />, "Twitter"],
	Instagram: [<FaInstagram className="icon" />, "Instagram"],
	Facebook: [<FaFacebookSquare className="icon" />, "Facebook"],
	Email: [<RiMailFill className="icon" />, "Email"],
	Web: [<FaGlobe className="icon" />, "Website"],
	CV: [<RiDownloadCloud2Line className="icon" />, "CV"]
};

export default iconComponent;
