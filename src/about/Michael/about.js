import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import spaceImage from '../../assets/michael_main_widescreen.png'

const AboutMichael = styled.div`
    // height: 100%;
    .spaceBackground {
        // width: 100vw;
        // height: 100vh;
		// position: absolute;
		// top: 0;
        z-index: -1;
    }
    background: url(${spaceImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    // position: absolute;
    // top: 0;

    .spacePic {
        width: 100%;
    }

    h1, p {
        width: 60%;
        margin-left: 5.4%;
    }

    .test {
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        height: 100%;
    }

    footer {
        display: flex;
        justify-content: space-around;
    }

    .seeMore {
        position: absolute;
        bottom: 5%;
        left: 50%;
        font-size: 2.5rem;
        transform: translate(-50%, -50%)
    }

    .socials {
        position: absolute;
        bottom: 5%;
        right: 5%;
        font-size: 2.5rem;
        transform: translate(50%, 50%)
        width: 30%;
    }

    .socials > * {
        margin-left: 20px;
    }
`

const About = () => {


    return (
        <AboutMichael>
            {/* <div className='spaceBackground'>
                <img className='spacePic' src={spaceImage} alt="background"/>
            </div> */}
            <div className='test'>
                <div>
                    <h1>Hi, I'm Michael.</h1>
                    <p>A passionate Full Stack Web Developer having  experience building Web applications with JavaScript / Reactjs / Nodejs, some other cool libraries and frameworks, as well as dabbling in  design.</p>
                </div>
                <footer>
                    <Link className='seeMore' to='/about/michael/projects'>See more...</Link>
                    <div className='socials'>
                        <FaLinkedin />
                        <FaGithub />
                        <FaGithub />
                        <FaTwitterSquare />
                    </div>
                </footer>
            </div>
        </AboutMichael>
    )
}

export default About