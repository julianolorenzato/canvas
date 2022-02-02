import { useState } from 'react'
import './Card.scss'

import { ButtonAdd } from '../ButtonAdd/ButtonAdd'

export function Card(props) {

    const [notes, setNotes] = useState([])
    const [haveInput, setHaveInput] = useState(false)

    const handleClick = (e) => {
        setHaveInput(true)
    }

    return (
        <div className='Card'>
            <div className='h1'>
                <h1 className='Card-h1'>{props.title}</h1>
            </div>
            <div className='tag-container'></div>
            <div className='btn'>
                <ButtonAdd />
            </div>
        </div>
    )
}