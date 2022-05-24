import { combineReducers } from 'redux'

import { citiesReducer } from './cities/cities.reducer'
import { weatherReducer } from './weather/weather.reducer'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  cities: citiesReducer,
})
