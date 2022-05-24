import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

import * as dayjs from 'dayjs'

import { getWeatherById } from '../../store/weather/weather.selectors'
import { getWeatherRequest } from '../../store/weather/weather.actions'

import { MAIN_WEATHER } from './lib/weather'

import {
  Container,
  Main,
  StyledP,
  Line,
  Description,
  Info,
  Forecast,
  Section,
  Note,
} from './styled'

export const Weather = () => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const [searchParams] = useSearchParams()

  const weather = useSelector((state) => getWeatherById(state, id))

  useEffect(() => {
    const geo = {
      lat: searchParams.get('lat'),
      lng: searchParams.get('lng'),
    }

    if (!weather) {
      dispatch(getWeatherRequest(geo))
    }
  }, [weather])

  console.log(weather)

  if (!weather) {
    return <Container>Loading...</Container>
  }

  const showNote = (temperature) => {
    switch (temperature) {
      case temperature > 30:
        return 'Stay hydrated and do not forget about protective clothes'
      case temperature < 10:
        return 'Do not forget to bring your jacket'
      default:
        return 'go outside'
    }
  }

  console.log(weather.weather[0].main)

  return (
    <Container mainWeather={weather.weather[0].main ?? MAIN_WEATHER.CLEAR}>
      <Section>
        <Info>
          <StyledP>{dayjs().format('MMMM DD, dddd')}</StyledP>
          <StyledP>{weather.name}</StyledP>
          <Description>{weather.weather[0].main}</Description>
        </Info>
        <Main mainWeather={weather.weather[0].main ?? MAIN_WEATHER.CLEAR} />
      </Section>
      <Line></Line>
      <Section>
        <Forecast>
          <StyledP>Temperature: {Math.round(weather.main.temp)} °C</StyledP>
          <StyledP>Humidity: {weather.main.humidity} % </StyledP>
          <StyledP>Wind speed: {Math.round(weather.wind.speed)} m/s</StyledP>
        </Forecast>
        <Note>{showNote(weather.main.temp)}</Note>
      </Section>
    </Container>
  )
}

// weather?.id
