import { Container } from './styles'

import { Card } from '../Card/Card'

export const titles = [
  'Principais Parcerias',
  'Principais Atividades',
  'Proposta de Valor',
  'Relacionamento com Clientes',
  'Segmento de Clientes',
  'Principais Recursos',
  'Canais',
  'Estrutura de Custos',
  'Fontes de Receita'
]

export function CanvasContainer() {

  return (
    <Container>
      <Card box='b1' theID={0} title={titles[0]} />
      <Card box='b2' theID={1} title={titles[1]} />
      <Card box='b3' theID={2} title={titles[2]} />
      <Card box='b4' theID={3} title={titles[3]} />
      <Card box='b5' theID={4} title={titles[4]} />
      <Card box='b6' theID={5} title={titles[5]} />
      <Card box='b7' theID={6} title={titles[6]} />
      <Card box='b8' theID={7} title={titles[7]} />
      <Card box='b9' theID={8} title={titles[8]} />
    </Container>
  )
}