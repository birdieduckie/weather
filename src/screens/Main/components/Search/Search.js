import { useEffect, useState } from 'react'
import { debounce } from 'debounce'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Input } from '../../../../shared/Input/Input'
import { Button } from '../../../../shared/Button/Button'

import { getCities } from '../../../../store/cities/cities.selectors'

import {
  getCitiesRequest,
  clearCities,
} from '../../../../store/cities/cities.actions'

import { getWeatherRequest } from '../../../../store/weather/weather.actions'

import { Container, Heading } from './styled'

export const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cities = useSelector((state) => getCities(state))

  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = debounce((event) => {
    setInputValue(event.target.value)
  }, 500)

  const search = () => dispatch(getCitiesRequest(inputValue))
  const clear = () => dispatch(clearCities())

  const getWeather = (lat, lng) =>
    dispatch(getWeatherRequest({ lat, lng }, navigate))

  useEffect(() => {
    if (inputValue.trim() === '') {
      clear()
      return
    }

    if (inputValue) {
      search(inputValue)
    }
  }, [inputValue])

  return (
    <Container>
      <Heading>
        <h1> Weather App</h1>
        <Input placeholder='Find city...' onChange={handleSetInputValue} />
      </Heading>
      {cities.map(({ name, geo }) => (
        <Button
          key={`${geo.lat} / ${geo.lng}`}
          onClick={() => getWeather(geo.lat, geo.lng)}
        >
          {name} - {geo.lat}/{geo.lng}
        </Button>
      ))}
    </Container>
  )
}
