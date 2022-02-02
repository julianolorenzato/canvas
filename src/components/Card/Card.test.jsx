import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('<Card />', () => {
    it('should render button with props.title', () => {
        render(<Card />)

        const card = screen.getByTitle('Canais')
    })
})
