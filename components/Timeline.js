import styled from 'styled-components'
import { Event } from './Event'
import { timeEvents } from './timeEvents'

const Wrapper = styled.div`
  margin: 0px;
  flex: 1;
  margin-top: 20px;
`

export const Timeline = () => {
  const initialDate = timeEvents[0].date
  const finalDate = timeEvents[timeEvents.length - 1].date
  let actualDate = initialDate
  const allTimeEvents = []
  //while (actualDate <= finalDate) {
  while (actualDate <= finalDate) {
    const actualTimeEvent = timeEvents.find(
      (timeEvent) => timeEvent.date == actualDate,
    )
    allTimeEvents.push({
      date: actualDate,
      description: actualTimeEvent ? actualTimeEvent.description : null,
    })
    actualDate++
  }

  return (
    <Wrapper>
      {allTimeEvents.map((timeEvent) => (
        <span key={timeEvent.date}>
          <Event timeEvent={timeEvent} />
        </span>
      ))}
    </Wrapper>
  )
}
