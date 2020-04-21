import styled from 'styled-components'
import { Info } from './Info'

const Wrapper = styled.div`
  margin: 0px;
  flex: 1;
  margin-top: 20px;
  margin-left: 15px;
  border: solid 1px #f4f4f4;
  color: palevioletred;
`

const informacoes = [
  {
    offset: 20,
    data: 1,
    descricao: 'Nasceu',
  },
  {
    offset: 50,
    data: 3,
    descricao: 'Entrou no 1 ano',
  },
  {
    offset: 50,
    data: 15,
    descricao: 'Diplomou',
  },
  {
    offset: 200,
    data: 30,
    descricao: 'Entrou na Universidade',
  },
  {
    offset: 30,
    data: 31,
    descricao: 'Teve netos',
  },
]
export const Timeline = () => (
  <Wrapper>
    {informacoes.map((informacao) => (
      <Info informacao={informacao} />
    ))}
  </Wrapper>
)
