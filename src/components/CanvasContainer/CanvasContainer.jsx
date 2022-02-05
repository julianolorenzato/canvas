import './CanvasContainer.scss'
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
    <div className='container'>
      <Card theID={0} className='box1' title={titles[0]} />
      <Card theID={1} className='box2' title={titles[1]} />
      <Card theID={2} className='box3' title={titles[2]} />
      <Card theID={3} className='box4' title={titles[3]} />
      <Card theID={4} className='box5' title={titles[4]} />
      <Card theID={5} className='box6' title={titles[5]} />
      <Card theID={6} className='box7' title={titles[6]} />
      <Card theID={7} className='box8' title={titles[7]} />
      <Card theID={8} className='box9' title={titles[8]} />
    </div>
  )
}