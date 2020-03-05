import { FILTER_GLOBAL_CHANGE } from '../../config/constants'

export const globalFilterChange = filter => {
  return {
    type: FILTER_GLOBAL_CHANGE,
    payload: filter
  }
}
