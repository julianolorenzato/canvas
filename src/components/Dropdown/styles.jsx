import styled from 'styled-components'

export const Container = styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    font-size: .9rem;
`

export const Title = styled.div`
    width: 150px;
    background-color: #eae6e5;
    padding: 5px 10px;
    border-radius: 20px;
    box-shadow: 0 0 15px ${props => props.theme.colors.shadow};
    transition: all .2s;
    cursor: pointer;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.titles};
        }

    ${props => {
        if(props.clicked) {
            return (
                `border-radius: 10px;
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                box-shadow: 0 0 15px #777;
                &:hover {
                    background-color: #eae6e5;
                    color: #333;
                }`
            )
        }
    }}
`

export const Menu = styled.ul`
    width: 150px;
    background-color: #eae6e5;
    position: absolute;
    padding: 5px;
    top: 48px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 10px #999;
`

export const Item = styled.li`
    list-style: none;
    padding: 5px;
    cursor: pointer;
    transition: all .2s;
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`