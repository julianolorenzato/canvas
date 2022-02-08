import React, { useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import themes from '../styles/themes'

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes[0])

    const changeTheme = value => {
        themes.forEach(t => {
            if(value === t.title) {
                setTheme(theme => t)
                return
            }
        })
    }
    
    useEffect(() => {
        if(window.localStorage.getItem('theme')) {
            setTheme(t => JSON.parse(window.localStorage.getItem('theme')))
        }
    }, [])
    
    useEffect(() => {
        window.localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <StyledThemeProvider theme={theme}>
            <ThemeContext.Provider value={{theme, changeTheme}}>
                {children}
            </ThemeContext.Provider>
        </StyledThemeProvider>
    )
}

export { ThemeContext, ThemeProvider }