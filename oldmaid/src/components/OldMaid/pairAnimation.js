import React from "react";
import { Redirect } from "react-router";
import styled, { keyframes } from "styled-components";

import cardFront from '../../assets/card_face_norm.png';

const Pile = styled.div`


    .sidePair {
        position: absolute;
        left: 5%;
        display: flex;
    }

    .card {
		padding: 1rem 0;
		width: 60px;
		height: 80px;
		font-size: 2rem;
		text-align: center;
		color: white;
		text-shadow: 1px 1px 0 black;
		background-image: url(${cardFront});
		background-repeat: no-repeat;
		background-size: auto 100%;
		background: cover / center;
        transform: rotate(-10deg);
	}

    .rightCard {
        position: relative;
        right: 20%;
        transform: rotate(10deg);
    }

    .newPair {
        position: absolute;
        display: flex;
        left: 50%;
        animation: Discarding 2s forwards ease-in-out;
    }


// these are for the fading background colors
@keyframes Discarding {
    0% {
        left: 50%;
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(1000deg);
        left: 5%;
    }
}

`

const PairedCards = (props) => {
    const { paired } = props;

    return(
        <Pile>
            {paired.map((pair, i) => {
                if(i !== paired.length - 1){
                    //put pairs on side
                    return (
                        <div key={Math.random()} className="sidePair">
                            <div className="card">{pair}</div>
                            <div className="card rightCard">{pair}</div>
                        </div>
                    )
                }   
                return (
                    <div key={Math.random()} className="newPair">
                        <div className="card">{pair}</div>
                        <div className="card rightCard">{pair}</div>
                    </div>
                )
            })}
        </Pile>
    )
}

export default PairedCards;