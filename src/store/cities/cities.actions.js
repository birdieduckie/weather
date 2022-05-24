export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST'
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS'
export const GET_CITIES_ERROR = 'GET_CITIES_ERROR'
export const CLEAR_CITIES = 'CLEAR_CITIES'

export const getCitiesRequest = (cityName) => ({
  type: GET_CITIES_REQUEST,
  cityName,
})

export const getCitiesSuccess = (cities) => ({
  type: GET_CITIES_SUCCESS,
  cities,
})

export const getCitiesError = (error) => ({
  type: GET_CITIES_ERROR,
  error,
})

export const clearCities = () => ({
  type: CLEAR_CITIES,
})
