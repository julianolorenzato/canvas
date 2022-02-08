import React, { useState, useEffect } from 'react'

const initialNotes = [
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
  
const NotesContext = React.createContext()

const NotesProvider = ({ children }) => {

    const [notesContextState, setNotesContextState] = useState(initialNotes)

    useEffect(() => {
        if(window.localStorage.getItem('notes')){
            setNotesContextState(n => JSON.parse(window.localStorage.getItem('notes')))
        }
    }, [])
    
    useEffect(() => {
        window.localStorage.setItem('notes', JSON.stringify(notesContextState))
    }, [notesContextState])

    return (
        <NotesContext.Provider value={[ notesContextState, setNotesContextState ]}>
            {children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }