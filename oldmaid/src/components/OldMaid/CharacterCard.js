import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border: 5px solid gray;
    border-radius: 50%;
    background-color: white;
    img{
        width: 100px;
        margin: 30px;
    }
`

export default function CharacterCard({ character, setCurrentChar, currentColor }) {
    const handleClick = () => {
        setCurrentChar(character)
    }

    return (
        <div>
            <Container >
                <img onClick={handleClick} src={character} alt='character'/>
            </Container>
        </div>
    )
}
