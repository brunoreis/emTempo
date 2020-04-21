import styled from 'styled-components'

const InfoWrapper = styled.div`
  border-left: solid 2px #000;
  margin-left: 15px;
  padding: 0 0 0 10px;
  display: flex;
  font-size: 16px;
  height: ${(props) => props.offset}px;
  align-items: flex-end;
`

const Data = styled.div`
  position: absolute;
  width: 30px;
  margin-left: -37px;
  color: #777;
  text-align: right;
`

const Ponto = styled.span`
  color: #000;
  margin-left: 2px;
  font-size: 19px;
`

const Descricao = styled.div``

export const Info = ({ informacao }) => (
  <InfoWrapper offset={informacao.offset}>
    <Data>
      {informacao.data}
      <Ponto>•</Ponto>
    </Data>
    <Descricao>{informacao.descricao}</Descricao>
  </InfoWrapper>
)
