import { all } from 'redux-saga/effects'

import { watchGetWeather as watchGetWeatherSaga } from './weather/weather.sagas'
import { watchGetCities as watchGetCitiesSaga } from './cities/cities.saga'

export function* rootSaga() {
  yield all([watchGetWeatherSaga(), watchGetCitiesSaga()])
}
