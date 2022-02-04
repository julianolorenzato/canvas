import './App.scss'
import React, { useState } from 'react'

import { Header } from '../../templates/Header'
import { CanvasContainer } from '../CanvasContainer/CanvasContainer'

const notesState = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

export const NotesContext = React.createContext()

function App() {
  const [contextState, setContextState] = useState(notesState)

  return (
    <div className='App'>
      <NotesContext.Provider value={[ contextState, setContextState ]}>
        <Header />
        <CanvasContainer />
      </NotesContext.Provider>
    </div>
  )
}

export default App
