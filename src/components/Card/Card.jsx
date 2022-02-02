import { useState } from 'react'
import './Card.scss'

import { Modal } from '../Modal/Modal'

export function Card(props) {

    const [notes, setNotes] = useState([])

    const changeNote = (e) => {
        const fakeNotes = notes
        fakeNotes[e.target.title] = e.target.value
        setNotes([...fakeNotes])
    }

    const addNote = () => {
        setNotes([...notes, ''])
    }

    const [toggleModal, setToggleModal] = useState(false)

    return (
        <div className={`Card ${props.className}`}>
            <div className='h1'>
                <h1 className='Card-h1'>{props.title}</h1>
            </div>
            <div className='note-container' onClick={() => {
                    setToggleModal(true)
            }}>
                {notes.map((value, key) => <div key={key} className='note'>{value}</div>)}
            </div>
            {toggleModal && <Modal addNote={addNote} changeNote={changeNote} notes={notes} title={props.title} closeModal={() => {
                setToggleModal(false)
            }} />}
        </div>
    )
}