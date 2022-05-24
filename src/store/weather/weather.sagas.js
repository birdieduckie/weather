import { call, put, takeLatest } from 'redux-saga/effects'

import { WEATHER_API } from '../../core/api'

import {
  GET_WEATHER_REQUEST,
  getWeatherSuccess,
  getWeatherError,
} from './weather.actions'

function* getWeather({ geo, navigate }) {
  try {
    const response = yield call(
      WEATHER_API.get,
      `/weather?lat=${geo.lat}&lon=${geo.lng}&units=metric&appid=884360aca03bb2188beeab6cdb2bc93a`
    )

    console.log(geo)

    yield put(getWeatherSuccess(response.data))

    console.log(response.data)

    if (navigate) {
      navigate(`/weather/${response.data.id}?lat=${geo.lat}&lng=${geo.lng}`)
    }
  } catch (error) {
    yield put(getWeatherError(error))
    console.error(error)
  }
}

export function* watchGetWeather() {
  yield takeLatest(GET_WEATHER_REQUEST, getWeather)
}
