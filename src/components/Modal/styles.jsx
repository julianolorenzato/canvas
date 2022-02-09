import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`

export const Wrapper = styled.div`
    width: 300px;
    height: 500px;
    padding: 30px;
    padding-top: 5px;
    border-radius: 20px;
    background-color: #eae6e5;
    box-shadow: 0 0 10px #444;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: stretch;

    h1 {
        text-align: center;
        font-size: 1.3rem;
        align-self: center;
        padding: 15px;
        color: ${props => props.theme.colors.text};
    }

    button {
        height: 30px;
        border: none;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 20px;
        transition: .2s;
        font-weight: 800;
        color: ${props => props.theme.colors.titles};
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`

export const TagsContainer = styled.div`
    height: 400px;
    overflow-y: auto;

    div {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        textarea {
            border-radius: 0px;
            height: 50px;
            width: 80%;
            resize: vertical;
            outline: none;
            margin-right: 5px;
        }
        
        button {
            width: 30px;
        }
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
        background: ${props => props.theme.colors.secondary};
    }
`