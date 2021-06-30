import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import willImage from '../assets/Will.png';
import michaelImage from '../assets/Michael.png';
import adrianImage from '../assets/Adrian.png';

const AboutPage = styled.div`

    background: linear-gradient(170deg, #E8C7FB, #FFFFFF); 
    height: 300vh;

    h1 {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Stalemate', cursive;
        font-size: 9rem;
        font-weight: 1;
    }

    .aboutIntro p {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 1.3rem;
    }

    img {
        transform: scale(.7);
        border-radius: 50%;
    }

    // .gallery {
    //     display: flex;
    //     flex-direction: column;
    //     position: absolute;
    //     top: 65%;
    //     padding-left: 10%;
    // }

    // .personInfo {
    //     display: flex;
    //     width: 90%;
    // }

    // .personInfo p {
    //     margin-top: 10%;
    //     margin-left: 10%;
    //     width: 50%;
    // }

        .gallery {
            width: 100%;
        }

        .personInfoW {
            position: absolute;
            top: 85%;
            left: 10%;
            width: 100%;
        }

        .personInfoW p {
            position: absolute;
            top: 32%;
            right: 23%;
            width: 40%;
            font-size: 1.3rem;
        }

        .personInfoM {
            position: absolute;
            top: 160%;
            left: 10%;
            width: 100%;
            height: 80%;
        }

        .personInfoM p {
            position: absolute;
            top: 25%;
            left: 5%;
            width: 40%;
            font-size: 1.3rem;
        }

        .personInfoM img {
            position: absolute;
            right: 18%;
        } 

        .personInfoA {
            position: absolute;
            top: 240%;
            left: 10%;
            width: 100%;
        }

        .personInfoA p {
            position: absolute;
            top: 32%;
            right: 23%;
            width: 40%;
            font-size: 1.3rem;
        }

`

const AboutUs = () => {


    return (
        <AboutPage>
            <div className='aboutIntro'>
                <h1>About This Site</h1>
                <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian van der Valk, and Michael Habermas. Click on the links below to learn more more about each individuala and their talents. A special thanks goes out to Vera P. and Devin M. for their specialized contributions... You Rock!!!</p>
            </div>
            <div className='gallery'>
                <div className='personInfoW'>
                    <Link to="/personal-info/will">
                        <img src={willImage} alt='Will' />
                    </Link>
                    <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian Van Der Valk, and Michael Habermas. Click on the links below to learn more more about each individual. A special thanks goes out to Vera P. and Devin M. for their specialized contributions.</p>
                </div>
                <div className='personInfoM'>
                    <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian Van Der Valk, and Michael Habermas. Click on the links below to learn more more about each individual. A special thanks goes out to Vera P. and Devin M. for their specialized contributions.</p>
                    <Link to="/personal-info/michael">
                        <img src={michaelImage} alt='Michael' />
                    </Link>
                </div>
                <div className='personInfoA'>
                    <Link to="/personal-info/adrian">
                        <img src={adrianImage} alt='Adrian' />
                    </Link>
                    <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian Van Der Valk, and Michael Habermas. Click on the links below to learn more more about each individual. A special thanks goes out to Vera P. and Devin M. for their specialized contributions.</p>
                </div>
            </div>
        </AboutPage>
    )
}

export default AboutUs;