import axios from 'axios'

export const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5' // GET с lat, long
// export const WEATHER_API_URL = 'https://api.tomorrow.io/v4'
export const CITIES_API_URL = 'https://places-dsn.algolia.net/1' // POST где отправляется { type: 'city', query: `${cityName}` }

export const WEATHER_API = axios.create({
  baseURL: WEATHER_API_URL,
})

export const CITIES_API = axios.create({
  baseURL: CITIES_API_URL,
})
