import { enumFilterChange, searchFilterChange } from '../action/filter'

export default history => store => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    next(action)
    const {
      router: {
        location: { query }
      }
    } = store.getState()

    if (query.text) {
      next(searchFilterChange(query.text, false))
    }
    if (query.enum) {
      next(enumFilterChange(query.enum, false))
    }
  } else {
    next(action)
  }
}
