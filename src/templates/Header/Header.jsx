import { Container, Side, Title } from './styles'

import { Dropdown } from '../../components/Dropdown/Dropdown'

export function Header() {
    return (
        <Container>
            <Side>
                <Dropdown />
            </Side>

            <Title>
                <h1>Modelo de Negócios</h1>
                <span>Feito por: Juliano Lorenzato</span>
            </Title>
            
            <Side />
        </Container>
    )
}