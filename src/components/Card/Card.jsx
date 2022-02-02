import { useState } from 'react'
import './Card.scss'

import { ButtonAdd } from '../ButtonAdd/ButtonAdd'
import { Modal } from '../Modal/Modal'

export function Card(props) {

    const [notes, setNotes] = useState([])
    const [haveInput, setHaveInput] = useState(false)

    const [toggleModal, setToggleModal] = useState(false)

    return (
        <div className={`Card ${props.className}`}>
            <div className='h1'>
                <h1 className='Card-h1'>{props.title}</h1>
            </div>
            <div className='tag-container' onClick={() => {
                    setToggleModal(true)
            }}>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
                <div className="tag">a</div>
            </div>
            {toggleModal && <Modal closeModal={() => {
                setToggleModal(false)
            }} />}
        </div>
    )
}