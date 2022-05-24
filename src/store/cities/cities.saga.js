import { call, put, takeLatest } from 'redux-saga/effects'

import { CITIES_API } from '../../core/api'

import {
  GET_CITIES_REQUEST,
  getCitiesSuccess,
  getCitiesError,
} from './cities.actions'

function* getCities({ cityName }) {
  try {
    const response = yield call(CITIES_API.post, '/places/query', {
      type: 'city',
      query: `${cityName}`,
    })
    console.log(response)
    yield put(getCitiesSuccess(response.data.hits))
  } catch (error) {
    yield put(getCitiesError(error))
    console.error(error)
  }
}

export function* watchGetCities() {
  yield takeLatest(GET_CITIES_REQUEST, getCities)
}
