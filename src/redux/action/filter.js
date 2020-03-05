import {
  FILTER_GLOBAL_CHANGE,
  FILTER_SEARCH_CHANGE
} from '../../config/constants'

export const globalFilterChange = filter => {
  return {
    type: FILTER_GLOBAL_CHANGE,
    payload: filter
  }
}

export const searchFilterChange = filter => {
  return {
    type: FILTER_SEARCH_CHANGE,
    payload: filter
  }
}
