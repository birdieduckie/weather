import { createSelector } from 'reselect'

const getItems = (state) => state.cities.items

export const getCities = createSelector(getItems, (cities) => {
  const filteredCities = cities.filter(
    (city) => city.is_city && city.is_popular
  )

  const transformedCities = filteredCities.map((city) => ({
    id: city.objectID,
    name: city.locale_names.default[0],
    geo: city._geoloc,
  }))

  return cities ? transformedCities : []
})
