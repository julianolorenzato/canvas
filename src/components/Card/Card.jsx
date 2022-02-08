import { Container, NoteContainer, Title } from './styles'

import { useContext, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext'

import { Modal } from '../Modal/Modal'

export function Card(props) {
    const [toggleModal, setToggleModal] = useState(false)

    const [ notes ] = useContext(NotesContext)

    return (
        <Container box={props.box}>
            <Title>
                <h1>{props.title}</h1>
            </Title>
            <NoteContainer box={props.box} onClick={() => {setToggleModal(true)}}>
                {notes[props.theID].map((value, key) => <div key={key} className='note'>{value}</div>)}
            </NoteContainer>
            {toggleModal && <Modal theID={props.theID} title={props.title} closeModal={() => {
                setToggleModal(false)
            }} />}
        </Container>
    )
}