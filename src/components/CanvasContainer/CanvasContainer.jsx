import './CanvasContainer.scss'
import { Card } from '../Card/Card'

export function CanvasContainer() {
  return (
    <div className='container'>
      <div className="box box1"><Card title='Principais Parcerias' /></div>
      <div className="box box2"><Card title='Principais Atividades' /></div>
      <div className="box box3"><Card title='Proposta de Valor' /></div>
      <div className="box box4"><Card title='Relacionamento com Clientes' /></div>
      <div className="box box5"><Card title='Segmento de Clientes' /></div>
      <div className="box box6"><Card title='Principais Recursos' /></div>
      <div className="box box7"><Card title='Canais' /></div>
      <div className="box box8"><Card title='Estrutura de Custos' /></div>
      <div className="box box9"><Card title='Fontes de Receita' /></div>
    </div>
  )
}