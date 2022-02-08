import styled from 'styled-components'

export const Container = styled.div`
    grid-area: ${props => props.box};

    border-radius: 20px;
    overflow: hidden;
    height: 100%;

    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px ${props => props.theme.colors.shadow};
`

export const Title = styled.div`
    font-size: .5rem;
    text-align: center;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.titles};
    flex: 0 0 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const NoteContainer = styled.div`
    background: #eae6e5;
    overflow-y: scroll;
    padding: 0px 10px;
    flex-grow: 1;
    transition: .3s;
    overflow-wrap: break-word;
    ${props => {
        if(props.box === 'b8' || props.box === 'b9') {
            return (
            `display: grid;
            grid-template-columns: 49% 49%;
            column-gap: 10px;`
            )
        }
    }}

    div {
        width: 100%;
        height: fit-content;
        background-color: skyblue;
        border-radius: 10px;
        padding: 5px;
        margin-top: 10px;
        color: #333;
    }

    &:hover {
        background: #fff;
        cursor: pointer;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #eae6e5;
    }

    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primary};
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #999;
    }
`