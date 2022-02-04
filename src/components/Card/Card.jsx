import './Card.scss'

import { NotesContext } from '../App/App'
import { useContext, useState } from 'react'

import { Modal } from '../Modal/Modal'

export function Card(props) {

    const [toggleModal, setToggleModal] = useState(false)


    const [ notes ] = useContext(NotesContext)

    return (
        <div className={`Card ${props.className}`}>
            <div className='h1'>
                <h1 className='Card-h1'>{props.title}</h1>
            </div>
            <div className='note-container' onClick={() => {setToggleModal(true)}}>
                {notes[props.theID].map((value, key) => <div key={key} className='note'>{value}</div>)}
            </div>
            {toggleModal && <Modal theID={props.theID} title={props.title} closeModal={() => {
                setToggleModal(false)
            }} />}
        </div>
    )
}