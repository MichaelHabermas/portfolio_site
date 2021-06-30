import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import willImage from '../assets/Will.png';
import michaelImage from '../assets/Michael.png';
import adrianImage from '../assets/Adrian.png';

const AboutPage = styled.div`
`

const AboutUs = () => {


    return (
        <AboutPage>
            <div>
                <h1>About This Site</h1>
                <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian van der Valk, and Michael Habermas. Click on the links below to learn more more about each individuala and their talents. A special thanks goes out to Vera P. and Devin M. for their specialized contributions... You Rock!!!</p>
            </div>
            <div>
                <div className='personInfo'>
                    <Link to="/personal-info/will">
                        <img src={willImage} alt='Will' />
                    </Link>
                    <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian Van Der Valk, and Michael Habermas. Click on the links below to learn more more about each individual. A special thanks goes out to Vera P. and Devin M. for their specialized contributions.</p>
                </div>
                <div className='personInfo'>
                    <p>This portfolio site is a collaborative work through the effort of Will Moon, Adrian Van Der Valk, and Michael Habermas. Click on the links below to learn more more about each individual. A special thanks goes out to Vera P. and Devin M. for their specialized contributions.</p>
                    <Link to="/personal-info/michael">
                        <img src={michaelImage} alt='Michael' />
                    </Link>
                </div>
                <div className='personInfo'>
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