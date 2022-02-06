import './Modal.scss'
import { useRef, useContext } from 'react'
import { NotesContext } from '../App/App'

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
        <div ref={ref} onClick={closeModal} className='modalBackground'>
            <div className='modalContainer'>
                <h1>{props.title}</h1>
                <div className='modalTags'>
                    {Array.from(notes[props.theID]).map((note, index) => {
                        return(
                        <div key={index} className='tag'>
                            <button onClick={removeNote} title={index}>X</button>
                            <textarea value={note} title={index} onChange={changeNote}></textarea>
                        </div>
                        )
                    })}
                </div>
                <button onClick={addNote}>Adicionar Nota</button>
            </div>
        </div>
    )
}