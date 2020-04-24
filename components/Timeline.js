import styled from 'styled-components'
import { Event } from './Event'
import { timeEvents } from './timeEvents'

const Wrapper = styled.div`
  margin: 0px;
  flex: 1;
  margin-top: 20px;
`

const calculateAllTimeEvents = () => {
  const initialDate = timeEvents[0].date
  const finalDate = timeEvents[timeEvents.length - 1].date
  let actualDate = initialDate
  const allTimeEvents = []
  //while (actualDate <= finalDate) {
  while (actualDate <= finalDate) {
    const filteredTimeEvents = timeEvents.filter(
      (timeEvent) => timeEvent.date == actualDate,
    )
    console.log(
      'calculateAllTimeEvents -> filteredTimeEvents',
      filteredTimeEvents,
    )

    let description = ''
    if (filteredTimeEvents.length > 0) {
      const descriptions = filteredTimeEvents.map((te) => te.description)
      description = descriptions.join('. ')
      console.log('calculateAllTimeEvents -> description', description)
      //.join(',')
    }

    allTimeEvents.push({
      date: actualDate,
      description,
    })
    actualDate++
  }
  return allTimeEvents
}

export const Timeline = () => {
  const allTimeEvents = calculateAllTimeEvents()

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
