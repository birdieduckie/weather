import { GET_WEATHER_SUCCESS, GET_WEATHER_REQUEST } from './weather.actions'

const initialState = {
  items: [],
  isLoading: false,
}

const setWeather = (state, action) => {
  return {
    ...state,
    items: [...state.items, action.weather],
    isLoading: false,
  }
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_WEATHER_SUCCESS:
      return setWeather(state, action)
    default:
      return state
  }
}
