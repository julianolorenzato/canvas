import GlobalStyles from '../../styles/global'
import { Container } from './styles'

import { NotesProvider } from '../../contexts/NotesContext'
import { ThemeProvider } from '../../contexts/ThemeContext'

import { Header } from '../../templates/Header/Header'
import { CanvasContainer } from '../CanvasContainer/CanvasContainer'

function App() {

  return (
    <div>
      <NotesProvider>
        <ThemeProvider>

          <Container>
            <Header />
            <CanvasContainer />
          </Container>

          <GlobalStyles />
        </ThemeProvider>
      </NotesProvider>
      
    </div>
  )
}

export default App
