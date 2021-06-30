import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import spaceImage from '../../assets/michael_main_widescreen.png'
import moonImage from '../../assets/moon.png'

const MAboutPage = styled.div`
    background: url(${spaceImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;

    .moon {
        position: absolute;
        transform: scale(0.8);
        bottom: 50%;
        right: 7%; 
    }

    h1, p, .seeMore {
        color: white;
    }

    h1 {
        margin-left: 5%;
        margin-bottom: 4%;
        margin-top: 5%;
        font-size: 5rem;
    }

    p {
        width: 40%;
        margin-left: 5%;
        font-size: 1.7rem;
    }

    .test {
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        height: 100%;
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
        right: 5%;
        bottom: 5%;
        font-size: 2.5rem;
        width: 30%;
        transform: translate(50%, -50%)
    }

    .socials > * {
        margin-left: 20px;
    }

    .mailImg {
        margin-top: 1%;
        transform: scale(1.085, 1.16);
    }

    .linkImg {
        transform: scale(1.08, 1);
    }
`

const MichaelAbout = () => {


    return (
        <MAboutPage>
            <div className='test'>
                <img className='moon' src={moonImage} alt='moon' />
                <div>
                    <h1>Hi, I'm Michael.</h1>
                    <p>A passionate Full Stack Web Developer having  experience building Web applications with JavaScript / Reactjs / Nodejs, some other cool libraries and frameworks, as well as dabbling in  design.</p>
                </div>
                <footer>
                    <Link className='seeMore' to='/personal-info/michael/projects'>See more...</Link>
                    <div className='socials'>
                        <FaGithub />
                        <FaLinkedin className='linkImg' />
                        <RiMailFill className='mailImg' />
                        <FaTwitterSquare />
                    </div>
                </footer>
            </div>
        </MAboutPage>
    )
}

export default MichaelAbout;