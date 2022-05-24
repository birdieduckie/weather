export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR'

export const  getWeatherRequest = (geo, navigate) => ({
  type: GET_WEATHER_REQUEST,
  geo,
  navigate,
})

export const getWeatherSuccess = (weather) => ({
  type: GET_WEATHER_SUCCESS,
  weather,
})

export const getWeatherError = (error) => ({
  type: GET_WEATHER_ERROR,
  error,
})
