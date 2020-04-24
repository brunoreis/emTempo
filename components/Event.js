import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
`

const Date = styled.div`
  width: ${(props) => props.width}px;
  text-align: right;
  padding-top: 6px;
  padding-right: 5px;

  color: #${(props) => (props.hasDescription ? '0157b6' : '999')};
  font-size: 13px;
  height: 100%;
`

const Bullet = styled.span`
  position: absolute;
  left: ${(props) => props.left}px;
  top: 3px;
`

const Description = styled.div`
  flex: 1;
  padding-left: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #664;
  border-left: solid 1px;
`

export const Event = ({ timeEvent }) => {
  const dateWidth = 40
  return (
    <div>
      <Wrapper>
        <Date width={dateWidth} hasDescription={!!timeEvent.description}>
          {timeEvent ? timeEvent.date : ''}
        </Date>
        {!!timeEvent && <Bullet left={dateWidth - 2.5}>•</Bullet>}
        <Description>{timeEvent ? timeEvent.description : ''}</Description>
      </Wrapper>
    </div>
  )
}
