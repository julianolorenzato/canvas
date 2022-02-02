import './ButtonAdd.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function ButtonAdd(props) {
    return (
        <button onClick={props.onClick} className='ButtonAdd'><FontAwesomeIcon icon={faPlus} /></button>
    )
}