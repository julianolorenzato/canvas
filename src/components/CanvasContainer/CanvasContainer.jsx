import './CanvasContainer.scss'
import { Card } from '../Card/Card'

export function CanvasContainer() {
  return (
    <div className='container'>
      <Card theID={0} className='box1' title='Principais Parcerias' />
      <Card theID={1} className='box2' title='Principais Ativkeyades' />
      <Card theID={2} className='box3' title='Proposta de Valor' />
      <Card theID={3} className='box4' title='Relacionamento com Clientes' />
      <Card theID={4} className='box5' title='Segmento de Clientes' />
      <Card theID={5} className='box6' title='Principais Recursos' />
      <Card theID={6} className='box7' title='Canais' />
      <Card theID={7} className='box8' title='Estrutura de Custos' />
      <Card theID={8} className='box9' title='Fontes de Receita' />
    </div>
  )
}