import styled from 'styled-components'

export const Container = styled.div`
    width: 1100px;
    height: 540px;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
    "b1 b1 b2 b2 b3 b3 b4 b4 b5 b5"
    "b1 b1 b6 b6 b3 b3 b7 b7 b5 b5"
    "b8 b8 b8 b8 b8 b9 b9 b9 b9 b9";
    gap: 10px;
`