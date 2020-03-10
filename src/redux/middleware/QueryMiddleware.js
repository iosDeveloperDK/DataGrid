import { enumFilterChange, globalFilterChange } from '../action/filter'
import {
  FILTER_ENUM_CHANGE,
  FILTER_GLOBAL_CHANGE
} from '../../config/constants'

export default history => store => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    next(action)
    const {
      router: {
        location: { query }
      }
    } = store.getState()

    if (query.text) {
      next(globalFilterChange(query.text, false))
    }
    if (query.enum) {
      next(enumFilterChange(query.enum, false))
    }
  } else {
    next(action)
  }
}
