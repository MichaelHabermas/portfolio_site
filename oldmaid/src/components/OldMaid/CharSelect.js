import React, { useState, useEffect } from 'react'
import Characters from '../../assets/characters/Characters';
import Character from '../Character';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    .characters {
        overflow: scroll;
        width: 50%;
    }
    .characters div {
        display: flex;    
        height: 20vh;
    }
`
const CurrentContainer = styled.div`
    border: 10px solid black;
    border-radius: 50%;
    width: 50%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;


    img {
        width: 75%;
        margin: 20%;
    }
`

export default function CharSelect() {
    const [ currentChar, setCurrentChar ] = useState();
    const [ currentColor, setCurrentColor ] = useState();

    const handleChange = (e) => {
        setCurrentColor(e.target.value)
    }

    return (
        <>
            <div>
                <div className='current-character' >
                        <img src={currentChar} />
                </div>
                <div className='characters'>
                    <h2>Choose Character</h2>
                    <div>
                        {Characters.map(character => {
                            return(
                                <Character
                                    character={{image: character, color: currentColor}} 
                                    setCurrentChar={setCurrentChar}
                                    currentColor={currentColor}
                            />
                            )
                        })}
                    </div>
                </div>
                <div className='colors'>
                    <h2>Choose a color</h2>
                    <input 
                        type='color'
                        value={currentColor}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}
