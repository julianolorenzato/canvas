import { useRef } from 'react'
import './Modal.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function Modal(props) {

    const ref = useRef()

    const closeModal = (e) => {
        if(e.target === ref.current) {
            props.closeModal()
        }
    }

    return (
        <div ref={ref} onClick={closeModal} className='modalBackground'>
            <div className='modalContainer'>
                <h1>{props.title}</h1>
                <div className='modalTags'>
                    {Array.from(props.notes).map((_, index) => <textarea value={props.notes[index]} title={index} onChange={props.changeNote} key={index}></textarea>)}
                </div>
                <button onClick={props.addNote}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    )
}