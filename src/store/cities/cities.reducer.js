import {
  GET_CITIES_SUCCESS,
  GET_CITIES_REQUEST,
  CLEAR_CITIES,
} from './cities.actions'

const initialState = {
  items: [],
  isLoading: false,
}

const setCities = (state, action) => {
  return {
    ...state,
    items: action.cities,
    isLoading: false,
  }
}
const clearCities = (state) => {
  return {
    ...state,
    items: [],
  }
}

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CITIES_SUCCESS:
      return setCities(state, action)
    case CLEAR_CITIES:
      return clearCities(state)
    default:
      return state
  }
}
