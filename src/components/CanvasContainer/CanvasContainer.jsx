import './CanvasContainer.scss'
import { Card } from '../Card/Card'

export function CanvasContainer() {
  return (
    <div className='container'>
      <Card className='box1' title='Principais Parcerias' />
      <Card className='box2' title='Principais Atividades' />
      <Card className='box3' title='Proposta de Valor' />
      <Card className='box4' title='Relacionamento com Clientes' />
      <Card className='box5' title='Segmento de Clientes' />
      <Card className='box6' title='Principais Recursos' />
      <Card className='box7' title='Canais' />
      <Card className='box8' title='Estrutura de Custos' />
      <Card className='box9' title='Fontes de Receita' />
    </div>
  )
}