import { Container, Wrapper, TagsContainer } from './styles'

import { useRef, useContext } from 'react'
import { NotesContext } from '../../contexts/NotesContext'

export function Modal(props) {

    const ref = useRef()

    const closeModal = (e) => {
        if(e.target === ref.current) {
            props.closeModal()
        }
    }

    //------------------------------------------

    const [ notes, setNotes ] = useContext(NotesContext)

    const addNote = () => {
        const fakeNotes = notes
        fakeNotes[props.theID].push('')
        setNotes(n => [...fakeNotes])
    }

    const removeNote = (e) => {
        const fakeNotes = notes
        fakeNotes[props.theID].splice(e.target.title, 1)
        setNotes(n => [...fakeNotes])
    }

    const changeNote = (e) => {
        const fakeNotes = notes
        fakeNotes[props.theID][e.target.title] = e.target.value
        setNotes(n => [...fakeNotes])
    }

    return (
        <Container ref={ref} onClick={closeModal}>
            <Wrapper>
                <h1>{props.title}</h1>
                <TagsContainer>
                    {Array.from(notes[props.theID]).map((note, index) => {
                        return(
                        <div key={index}>
                            <button onClick={removeNote} title={index}>X</button>
                            <textarea value={note} title={index} onChange={changeNote}></textarea>
                        </div>
                        )
                    })}
                </TagsContainer>
                <button onClick={addNote}>Adicionar Nota</button>
            </Wrapper>
        </Container>
    )
}