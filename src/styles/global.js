import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        color: ${props => props.theme.colors.text};
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${props => props.theme.colors.secondary};
    }

    button, textarea {
        font-family: 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.titles}
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`