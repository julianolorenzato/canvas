import { Container, Title, Menu, Item } from './styles'

import { useEffect, useRef, useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import themes from '../../styles/themes'
const titles = themes.map(t => t.title)

export const Dropdown = (props) => {
    const [dropdown, setDropdown] = useState(false)

    const menu = useRef(null)

    const handleClick = e => {
        if(menu.current && !menu.current.contains(e.target)){
            setDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {document.removeEventListener('mousedown', handleClick)}
    }, [])

    //------------------------------------------------------------------------

    const { theme, changeTheme } = useContext(ThemeContext)

    const changeItem = e => {
        changeTheme(e.target.textContent)
    }

    return (
        <Container>
            {!dropdown && <Title onClick={() => { setDropdown(!dropdown) }}>Tema: {theme.title}</Title>}
            {dropdown &&
                <>
                    <Title clicked onClick={() => { setDropdown(!dropdown) }}>Tema: {theme.title}</Title>
                    <Menu ref={menu} className='dropdown-menu'>
                        {titles.map((v, i) => <Item onClick={changeItem} key={i}>{v}</Item>)}
                    </Menu>
                </>}
        </Container>
    )
}