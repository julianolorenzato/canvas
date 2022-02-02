import './Modal.scss'

export function Modal(props) {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={props.closeModal}>Fechar</button>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}