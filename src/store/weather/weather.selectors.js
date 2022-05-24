import { createSelector } from 'reselect'

const getId = (_, id) => id

const getWeathers = (state) => state.weather.items

export const getWeatherById = createSelector(
  getWeathers,
  getId,
  (weathers, id) => {
    const weather = weathers.find((weather) => weather.id === +id)

    return weather
  }
)
