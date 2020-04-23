import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
  height: ${(props) => props.offset}px;
  align-items: flex-start;
  height: 25px;
`

const Date = styled.div`
  width: ${(props) => props.width}px;
  text-align: right;
  padding-top: 6px;
  padding-right: 5px;
  color: #${(props) => (props.hasDescription ? '0157b6' : '999')};
  font-size: 13px;
`

const Bullet = styled.span`
  position: absolute;
  left: ${(props) => props.left}px;
  top: 3px;
`

const Description = styled.div`
  border-left: solid 2px #000;
  padding-left: 5px;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #664;
`

export const Event = ({ timeEvent }) => {
  const dateWidth = 40
  return (
    <Wrapper>
      <Date width={dateWidth} hasDescription={!!timeEvent.description}>
        {timeEvent ? timeEvent.date : ''}
      </Date>
      {!!timeEvent && <Bullet left={dateWidth - 2.5}>•</Bullet>}
      <Description>{timeEvent ? timeEvent.description : ''}</Description>
    </Wrapper>
  )
}
