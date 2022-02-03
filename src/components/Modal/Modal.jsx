import { useRef } from 'react'
import './Modal.scss'

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
                    {Array.from(props.notes).map((_, index) => {
                        return(
                        <div key={index} className='tag'>
                            <button onClick={props.removeNote} title={index}>-</button>
                            <textarea value={props.notes[index]} title={index} onChange={props.changeNote}></textarea>
                        </div>
                        )
                    })}
                </div>
                <button onClick={props.addNote}>Adicionar Nota</button>
            </div>
        </div>
    )
}